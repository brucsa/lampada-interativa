let fundo = document.body

function inicio() {
    fundo.style.background = "#000"
    btnAcender.style.display = "inline" //aparece
    btnApagar.style.display = "none" //desaparece
    btnTrocar.style.display = "none" //desaparece
    btnQuebrar.style.display = "none" //desaparece
    btnVoltar.style.display = "none" //desaparece
}

function acender() {
    imgLampada.setAttribute("src", "imagens/lampada-on.png")
    fundo.style.background = "white"

    btnAcender.style.display = "none" //desaparece
    btnApagar.style.display = "inline" //aparece
    btnTrocar.style.display = "none" //desaparece
    btnQuebrar.style.display = "none" //desaparece
    btnVoltar.style.display = "none" //desaparece
}
btnAcender.addEventListener("click", acender)

function apagar() {
    imgLampada.setAttribute("src", "imagens/lampada-off.png")
 fundo.style.background = "#3F2144"

    btnAcender.style.display = "none" //desaparece
    btnApagar.style.display = "none" //desaparece
    btnTrocar.style.display = "none" //desaperece
    btnQuebrar.style.display = "inline" //aparece
    btnVoltar.style.display = "none" //desaparece
}
btnApagar.addEventListener("click", apagar)

function quebrar() {
    imgLampada.setAttribute("src", "imagens/lampada-quebrada.png")
    fundo.style.background = "#000"

    btnAcender.style.display = "none" //desaparece
    btnApagar.style.display = "none" //desaparece
    btnQuebrar.style.display = "none" //desaparece
    btnTrocar.style.display = "inline" //aparece
    btnVoltar.style.display = "none" //desaparece
}
imgLampada.addEventListener("dblclick", quebrar)

function trocar() {
    imgLampada.setAttribute("src", "imagens/lampada-off.png")

    btnAcender.style.display = "none" //desaparece
    btnApagar.style.display = "none" //desaparece
    btnQuebrar.style.display = "none" //desaparece
    btnTrocar.style.display = "none" //desaparece
    btnVoltar.style.display = "inline" //aparece

}
btnTrocar.addEventListener("click", trocar)

function voltar() {
    imgLampada.setAttribute("src", "imagens/lampada-inicio.png")
    fundo.style.background = "#000"

    btnAcender.style.display = "inline" //aparece
    btnApagar.style.display = "none" //desaparece
    btnTrocar.style.display = "none" //desaparece
    btnQuebrar.style.display = "none" //desaparece
    btnVoltar.style.display = "none" //desaparece
}
btnTrocar.addEventListener("click", voltar)