const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (e) => {
    // window.location = "https://www.google.com.br"; // redireciona para outra pagina
    // window.location.replace("https://www.google.com.br") // Deleta a url corrente do historico(nao consegue voltar pela setinha)
    // window.location.assign("https://www.google.com.br") // Não deleta a url corrente do historico
    // window.location.reload(); // recarrega a página
    // window.history.back()
    // window.history.forward()
    // window.history.go(1) // Navega para a proxima pagina do historico (varia de acordo com o numero passado)
    // console.log(window.history.length)
    window.location = url.value;
})