const button = document.getElementById("loadBtn");
const status = document.getElementById("status");
const users = document.getElementById("users");

button.addEventListener("click", () => {

    status.innerHTML = "Loading...";
    users.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            data.forEach(user => {

                users.innerHTML += `
                    <div class="user">
                        <h3>${user.name}</h3>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                    </div>
                `;
            });

            status.innerHTML = "Loaded Successfully";

        })
        .catch(error => {
            status.innerHTML = "Error loading data";
            console.log(error);
        });

    }, 2000);

});

