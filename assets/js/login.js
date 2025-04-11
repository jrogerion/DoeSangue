document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
  
    try {
      const response = await fetch('usuarios.json');
      const usuarios = await response.json();
  
      const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);
  
      if (usuarioValido) {
        mensagem.style.color = 'green';
        mensagem.textContent = 'Login bem-sucedido!';
        // redireciona, se quiser:
        // window.location.href = "pagina-protegida.html";
      } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Email ou senha incorretos!';
      }
    } catch (error) {
      mensagem.style.color = 'red';
      mensagem.textContent = 'Erro ao carregar dados.';
      console.error(error);
    }
  });
  