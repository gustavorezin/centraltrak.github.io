function limparForm() {
  let elementos = document.querySelector(".formContato").elements; // retorna os elementos dentro do form
    for(i = 0; i < elementos.length; i++) {
      elementos[i].value = '';
    }
  }

const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      const formContato = document.querySelector(".formContato")

      const nome = (formContato.name.value).toUpperCase().trim()
      const email = (formContato.email.value).toLowerCase().trim()
      const assunto = (formContato.subject.value).toUpperCase().trim()

      const mensagem = formContato.message.value.trim()

      const link = "https://wa.me/5548992117323?text=Olá,+tudo+bem?%0AMe+chamo+*" + nome + 
        "*!%0A%0AE-mail:+*" + email + "*%0AAssunto:+*" + assunto + 
        "*%0A%0A" + mensagem 
      
      window.open(link, '_blank')
      limparForm()
    }

    form.classList.add('was-validated')
  }, false)
})