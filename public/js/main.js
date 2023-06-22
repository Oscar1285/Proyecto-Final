const formLogger = document.getElementById('Logger');
const myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});

formLogger.addEventListener("submit", function(e) {
  e.preventDefault();
  if (!formLogger.checkValidity()) {
    formLogger.classList.add('was-validated');
    myModal.show();
  } else {
    const emailInput = document.getElementById("email");
    const contrasenyaInput = document.getElementById("contrasenya");
    const nicknameInput = document.getElementById("nickname");
    const email = emailInput.value;
    const contrasenya = contrasenyaInput.value;
    const nickname = nicknameInput.value;
    const url = "http://localhost:3000/api/usuarios/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        contrasenya: contrasenya,
        nickname: nickname,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Realiza acciones adicionales después de recibir la respuesta

        // Restablecer los campos y el estado de validación
        formLogger.reset();
        formLogger.classList.remove('was-validated');
      })
      .catch((error) => {
        console.log(error);
        // Maneja cualquier error que ocurra durante la solicitud fetch
      });
  }
});




