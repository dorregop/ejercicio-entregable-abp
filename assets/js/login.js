const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (event) {
    console.log("Dentro del evento...");
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailDB = "user@example.com";
    let passwordDB = "password123";

    if (email == emailDB && password == passwordDB) {
      alert("Sesión iniciada correctamente.");
      location.href = "index.html";
    } else {
      alert("Email y/o password incorrectos, vuelva a intentar.");
    }
  });
}
