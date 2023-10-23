const form = documente.querySelector("form")
const resp = document.querySelector("outsResp")
const resp1 = document.querySelector("outsResp1")

form.addEvenListener("submit", (e)=>{
    e.prventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
        alert("essas medias não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois.")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }
    resp.innerText = `Lados podem formar um triângulo`

    if(ladoA == ladoB && ladoA == ladoC){
          resp1.innerText = `tipo: Equilátero`
    } else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
        resp1.innerText = `Tipo: Isóceles`
    }else{
        resp1.innerText = `Tipo: Escaleno`
    }
    
})