Entrar

Cadastrar
Você disse:
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const mensagem = document.getElementById('textarea')

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  checkInputs()
})

function checkInputs(){
  const usernameValue = username.value
  const emailValue = email.value
  const assuntoValue = assunto.value
  const mensagemValue = mensagem.value

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (assuntoValue === "") {
    setErrorFor(assunto, "O assunto é obrigatório.");
  } else {
    setSuccessFor(assunto);
  }

  if (mensagemValue === "") {
    setErrorFor(mensagem, "A mensagem é obrigatória.");
  } else {
    setSuccessFor(mensagem);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");


  small.innerText = message;


  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;


  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}



let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
  event.preventDefault();
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active')
})
faca uma formulario funcional
O ChatGPT disse:
ChatGPT
Para que o seu formulário funcione corretamente, com validação de campos e integração com um modal, o código que você forneceu está bastante próximo do objetivo, mas precisa de alguns ajustes e melhorias. Vou explicar como refinar o código para garantir que ele funcione de forma eficaz.

Aqui estão os passos e correções que você pode implementar:

Adição do modal: O código para abrir e fechar o modal parece correto, mas a variável event no modalBtn não foi definida corretamente. A correção seria usar o objeto de evento que é passado automaticamente para o manipulador da função.

Validação do formulário: O código de validação do formulário parece estar funcionando bem, mas podemos garantir que a função checkInputs seja chamada corretamente e que o formulário só seja enviado quando tudo estiver correto.

Correção da estrutura HTML: Além do código JavaScript, também precisaremos de uma estrutura HTML básica para suportar o formulário e o modal.

Aqui está o código JavaScript completo ajustado:

Código JavaScript ajustado:
javascript
Copiar código
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('textarea');

form.addEventListener("submit", function(e) {
  e.preventDefault();  
  checkInputs();  

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const assuntoValue = assunto.value;
  const mensagemValue = mensagem.value;


  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }


  if (assuntoValue === "") {
    setErrorFor(assunto, "O assunto é obrigatório.");
  } else {
    setSuccessFor(assunto);
  }

  
  if (mensagemValue === "") {
    setErrorFor(mensagem, "A mensagem é obrigatória.");
  } else {
    setSuccessFor(mensagem);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');


modalBtn.addEventListener('click', function(e) {
  e.preventDefault();  
  modalBg.classList.add('bg-active');
});


modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
});
Estrutura HTML:
Aqui está um exemplo de como você pode estruturar o HTML para que o formulário e o modal funcionem:

html
Copiar código
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de Contato</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Formulário de Contato -->
  <form id="form">
    <div class="form-control">
      <label for="username">Nome de Usuário</label>
      <input type="text" id="username">
      <small></small>
    </div>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email">
      <small></small>
    </div>

    <div class="form-control">
      <label for="assunto">Assunto</label>
      <input type="text" id="assunto">
      <small></small>
    </div>

    <div class="form-control">
      <label for="textarea">Mensagem</label>
      <textarea id="textarea"></textarea>
      <small></small>
    </div>

    <button type="submit">Enviar</button>
  </form>

  <!-- Modal -->
  <button class="modal-btn">Abrir Modal</button>
  <div class="modal-bg">
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <p>Conteúdo do Modal</p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
