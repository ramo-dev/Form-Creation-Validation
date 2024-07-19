document.addEventListener("DOMContentLoaded", fetchUserData);


const dataContainer = document.getElementById("api-data");
const userList = document.createElement("ul");

dataContainer.innerHTML = "";

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = user.name;
        userList.appendChild(listItem);
      });
    dataContainer.appendChild( userList)
  } catch (err) {
    console.log("Failed to load user data");
  }
}


