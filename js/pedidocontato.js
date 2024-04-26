// adiciona o recurso ao carregar todo o objeto DOM
document.addEventListener("DOMContentLoaded", () => {

    // recupera o botão enviar pedido
    let btnEnviarPedido = document.querySelector(".btn-enviar-pedido")

    // variável para armazenar os itens do pedido
    let pedido = ""

    // adiciona um evento de clique ao botão enviar pedido
    btnEnviarPedido.addEventListener("click", () => {

        // se o pedido estiver vazio
        if (pedido === "") {
            document.getElementById("modal-pedido-msg").textContent 
                = "O que deseja fazer?"
        } 
        // cria um modal e exibe o pedido na tela
        const meuModal = new bootstrap.Modal(
            document.getElementById("modal-pedido"), {}
        )
        // exibe o modal na tela
        meuModal.show()

    })

    // recupera o botão de confirmação de pedido
    let btnConfirmarPedido = document.getElementById("btn-enviar-pedido")

    // ação de clique no botão confirmar pedido
    btnConfirmarPedido.addEventListener("click", () => {
        // redireciona o usuário para o WhatsApp
        window.location.href = "https://wa.me/5532984355406?text=" +
            encodeURI(pedido.replace(/<br\s*[\/]?>/gi, "\n"))
    })

})