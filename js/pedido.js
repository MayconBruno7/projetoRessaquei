// adiciona o recurso ao carregar todo o objeto DOM
document.addEventListener("DOMContentLoaded", () => {

    // recupera a lista de botões de inclusão/remoção
    let btnIncluirRemover = document.querySelectorAll(".btn-incluir-remover")

    // para cada botão incluir/remover
    btnIncluirRemover.forEach(function(btn){

        // adiciona um evento de clique
        btn.addEventListener("click", () => {

            // caso o atributo data-pedido esteja igual a 0, inclui o item
            if (btn.getAttribute("data-pedido") === "0") {
                // muda o valor do atributo
                btn.setAttribute("data-pedido", "1")
                // muda o texto do botão
                btn.textContent = "Remover"
            } else {
                btn.setAttribute("data-pedido", "0")
                btn.textContent = "Incluir"
            }
        })
    })

    // recupera o botão enviar pedido
    let btnEnviarPedido = document.querySelector(".btn-enviar-pedido")

    // variável para armazenar os itens do pedido
    let pedido = ""

    // adiciona um evento de clique ao botão enviar pedido
    btnEnviarPedido.addEventListener("click", () => {

        // variável para determinar o valor total do pedido
        let totalPedido = 0
        
        // verifica cada botão incluir/remover
        btnIncluirRemover.forEach(function(btn) {

            // verifica o atributo data-pedido
            if (btn.getAttribute("data-pedido") === "1") {

                // armazena a quantidade pedida do produto
                let quantidade = parseInt(
                    document.querySelector(
                        ".quantidade[data-codigo-quantidade='" + 
                        btn.getAttribute("data-codigo") + "']").value
                )

                // armazena o nome do produto
                let produto = btn.getAttribute("data-produto")

                // recupera o valor do item
                let valor = parseFloat( btn.getAttribute("data-valor") ).toFixed(2)

                // subtotal do item
                let subtotal = (quantidade * valor).toFixed(2)

                // adiciona o valor ao total do pedido
                // totalPedido = totatotalPedido + subtotal
                totalPedido += parseFloat(subtotal)

                // adiciona a quantidade e produto ao pedido
                pedido += quantidade + " - " + produto + " x " + valor + " = " + 
                        subtotal + "<br>"
            }
        })

        // se o pedido estiver vazio
        if (pedido === "") {
            document.getElementById("modal-pedido-msg").textContent 
                = "Inclua ao menos um item para realizar o pedido"
        } else {
            // concatena o valor total à string do pedido
            pedido += "Total do pedido: R$" + totalPedido.toFixed(2)
            // inclui os itens do pedido no modal
            document.getElementById("modal-pedido-msg").innerHTML = pedido;
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
        window.location.href = "https://wa.me/5532984102887?text=" +
            encodeURI(pedido.replace(/<br\s*[\/]?>/gi, "\n"))
    })

    let minimo = 10000000000000
    let maximo = 0

    let filtro = document.querySelectorAll(".custom-control-input")

    filtro.forEach(function(chk){

        // adiciona um evento de clique
        chk.addEventListener("click", () => {

            if (chk.checked) {
                let min = chk.getAttribute("data-min")
                let max = chk.getAttribute("data-max")
                //console.log(parseFloat(min))
                if (parseFloat(min)<minimo) {
                    minimo = min
                }
                if (parseFloat(max)>maximo) {
                    maximo = max
                }

                console.log("min: " + minimo)
                console.log("max: " + maximo)
            }

            // percorrer todos os refrigerantes
            let refri = document.querySelectorAll(".refri")
            let cerveja = document.querySelectorAll(".cerveja")
            let cigarro = document.querySelectorAll(".cigarro")
            let conhaque = document.querySelectorAll(".conhaque")
            let glen = document.querySelectorAll(".glen") 
            let jack = document.querySelectorAll(".jack") 
            let vinho = document.querySelectorAll(".vinho") 
            let vodka = document.querySelectorAll(".vodka") 
            let whisky = document.querySelectorAll(".whisky") 
            let champagne = document.querySelectorAll(".champagne") 

            refri.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            cerveja.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            cigarro.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            conhaque.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            glen.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            jack.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            vinho.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            vodka.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            whisky.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

           champagne.forEach(function(btn){

                console.log("preco: " + btn.getAttribute("data-valor"))
                if (parseFloat(btn.getAttribute("data-valor")) > minimo && parseFloat(btn.getAttribute("data-valor")) < maximo) {
                    btn.style.display = "block"                   
                } else {
                    btn.style.display = "none"
                }
                // se o preco nao estiver entre minimo e maximo remove da lista
            })

            
        })
    })

})