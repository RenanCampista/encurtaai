function encurtar() {
    let url = document.getElementById("input-url").value
    //Pega a url para ver se será válida
    if(!url){
        window.alert("Por favor, insira uma url válida.")
        return
    }
    //api key: 47fb7281002a41c4be79e62a4d77b973

    //encurtar o link

    //headers => pedir para rebrandy encurtar o link para gente
    let headers = {
        //esse objeto vai receber duas informações
        "Content-Type": "application/json",
        //Estou dizendo para API que vou transitar dados json para essa requisição
        "apiKey": "47fb7281002a41c4be79e62a4d77b973"
    }
    //dados => configurar os dados da requisição
    let linkRequest = {
        // vai ser para mandar o link que eu quero encurtar 
        destination: url,
        domain: { fullName: "rebrand.ly" } // => domínio padrao que disponibilizam
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
        //body será os dados com o link que será encurtado
        //como eu tenho um objeto (linkRequest) vou ter que parciar ele para mandar como uma string
        })
            .then(responde => responde.json()) //Dentro de fecth sao os dados que eu vou mandar e .then são os dados do retorno
            .then(json => {
                console.log(json)
                let inputUrl = document.getElementById("input-url")
                inputUrl.value = json.shortUrl //vai ser o link encurtado
            })
            //O primeiro then vai pegar os dados que vao retornar da rebrandly e vai colocar como json
            // O segundo vai pegar exatamente o que foi retornado no primeiro. No caso é uma aerofunction
            //entao ela tem o retorno implícito

    
}

function copiar() {
    let inputUrl = document.getElementById("input-url")
    inputUrl.select() //selecionar o texto
    inputUrl.setSelectionRange(0, 99999) //serve para copiar textos em dispositivos móveis

    navigator.clipboard.writeText(inputUrl.value)
    window.alert(`URL copiada: ${inputUrl.value}`)
}