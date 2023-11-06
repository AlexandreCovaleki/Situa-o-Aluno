const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0
let ValTotal = 0
let resposta = ""

removeEventListener.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescrição.value
    const valor = Numbe(rm.inValor.value)

    numContas++
    ValTotal = ValTotal + valor

    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-----------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${ValTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.InValor.value = ""
    frm.inDescricao.focus()
})