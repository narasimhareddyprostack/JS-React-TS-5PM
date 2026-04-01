let user = [];

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  user = await res.json(); 

  display(); // data ready
}

function display() {
  let rows = "";

  user.forEach((value) => {
    rows += `
      <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.address.city}</td>
        <td>${value.email}</td>
      </tr>`;
  });

  document.getElementById("abc").innerHTML = rows;
}

// API call
getData();