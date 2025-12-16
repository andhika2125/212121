// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}

// CEK LOGIN
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("data-asrama");
            data.forEach(siswa => {
                table.innerHTML += `
                    <tr>
                        <td>${siswa.nama}</td>
                        <td>${siswa.kelas}</td>
                        <td>${siswa.house}</td>
                    </tr>
                `;
            });
        });
}

// LOGOUT
function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
