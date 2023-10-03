alert("testando")
//Cria referência ao form e elementos de resposta do programa
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
 
 //cria um ouvinte
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = form.inNome.value
    const nota1 = number(form.innotal.value)
    const nota2 = number(form.innota2.value)

    const media = (nota1 + nota2)/2
    resp1.innerText = 'media das notas $ {media.tofixed(2))}'

    if(media >=7){
      resp2;innerText = 'paraben $(adolescente}! você foi aprovado(a)'
      resp2. style.color = "blue"
    }else if (media >=4) {
      resp2.innerText = 'atenção você esta de exame'
      resp2.style.color = "green"
    }else{
      resp2.innerText = 'ops ${aborrescente}!você foi reprovado(a)'
      resp2.style.color = 'red'
    }
  })