const message = document.querySelector(".message");
const userCardTemplate = document.querySelector("#user-card-template");
const usersList = document.querySelector(".users");
const getCardsBtn = document.querySelector("#get-cards-btn");
const removeAllCardsBtn = document.querySelector("#remove-all-cards-btn");

async function getUsers() {
  const users = JSON.parse(localStorage.getItem("users"));

  if (!users || users.length === 0) {
    message.textContent = "Данные загружаются...";
    message.classList.add("message--load");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      let response = await fetch("./users.json");

      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }

      let fetchedUsers = await response.json();
      localStorage.setItem("users", JSON.stringify(fetchedUsers));

      renderUsers(fetchedUsers);
      message.textContent = "";
    } catch (error) {
      message.textContent = `Не удалось загрузить пользователей: ${error}`;
      message.classList.add("message--error");
    } finally {
      message.classList.remove("message--load");
    }
  }
}

const renderUsers = (users) => {
  usersList.innerHTML = "";

  users.forEach((user) => {
    const userClone = userCardTemplate.content.cloneNode(true);
    const userName = `${user.name} ${user.surname}`;

    userClone.querySelector(".user-card__name").textContent = userName;
    userClone.querySelector(".user-card__age").textContent = user.age;
    userClone.querySelector(".user-card__email").textContent = user.email;
    const deleteBtn = userClone.querySelector("#remove-card-btn");

    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });

    usersList.appendChild(userClone);
  });
};

getCardsBtn.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users"));

  if (!users || users.length === 0) {
    getUsers();
  } else {
    message.textContent = "Все карточки уже отображены";
  }
});

removeAllCardsBtn.addEventListener("click", () => {
  usersList.innerHTML = "";
  message.textContent = "";
  localStorage.removeItem("users");
});

const deleteUser = (id) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const filteredUsers = users.filter((user) => user.id !== id);

  localStorage.setItem("users", JSON.stringify(filteredUsers));
  renderUsers(filteredUsers);
};

const init = () => {
  const cachedUsers = localStorage.getItem("users");

  if (cachedUsers) {
    renderUsers(JSON.parse(cachedUsers));
  } else {
    getUsers();
  }
};

init();
