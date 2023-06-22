document.addEventListener('DOMContentLoaded', function() {
  const url = "http://localhost:3000/api/usuarios/";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const loggedInUser = data.find(user => user.email === 'pato@pato.com');
      
      const iniciadoDiv = document.querySelector('.iniciado');
      if (loggedInUser) {
        const { id, email, contrasenya, nickname } = loggedInUser;
        iniciadoDiv.innerHTML = `
          <p>id: ${id}</p>
          <p>Email: ${email}</p>
          <p>Contraseña: ${contrasenya}</p>
          <p>Nickname: ${nickname}</p>
        `;
      } else {
        const showErrorDiv = document.createElement('div');
        showErrorDiv.className = 'error-message';
        showErrorDiv.innerHTML = '<p>Error: Usuario y/o contraseña inválidos.</p>';
        iniciadoDiv.appendChild(showErrorDiv);
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});