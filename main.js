const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}

const escuta = document.getElementById("cep")
escuta.addEventListener("blur", () => {
    let Cep = document.getElementById("cep").value
    console.log(Cep)
    fetch(`https://viacep.com.br/ws/${Cep}/json/`, options).then((resposta) => {
        resposta.json().then(data => {
            console.log(data)
            document.getElementById("bairro").value = data.bairro
            document.getElementById("ddd").value = data.ddd
            document.getElementById("ibge").value = data.ibge
            document.getElementById("localidade").value = data.localidade
            document.getElementById("logradouro").value = data.logradouro
            document.getElementById("uf").value = data.uf
            document.getElementById("siafi").value = data.siafi
        })
    })
})

function enviar() {
    let bairro = document.getElementById("bairro").value
    let ddd = document.getElementById("ddd").value
    let ibge = document.getElementById("ibge").value
    let localidade = document.getElementById("localidade").value
    let logradouro = document.getElementById("logradouro").value
    let uf = document.getElementById("uf").value
    let siafi = document.getElementById("siafi").value

    console.log(bairro, ddd, ibge, localidade, logradouro, uf, siafi)

    let json = {
        "bairro": bairro,
        "ddd": ddd,
        "ibge": ibge,
        "localidade": localidade,
        "logradouro": logradouro,
        "uf": uf,
        "siafi": siafi
    }
    console.log(json)
}
