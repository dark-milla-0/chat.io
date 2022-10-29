const c = (el) => document.querySelector(el)

const botao = c('#botao')
const nome = c('#nome')
const res = c('.msg-welcome')

if(botao && nome) {
    botao.addEventListener('click', (e) => {
        e.preventDefault
        const inputValue = `<span style="color: black;">Leon</span> <br><br> O T-vírus pode estar se espalhando por aí ${nome.value}, <br> mesmo assim é um prazer conhecer você`
        localStorage.setItem('inputValue', inputValue)

        c('#nome').value = ""
    })
}
if(res) {
    res.innerHTML = localStorage.inputValue
}




enviar = () => {
    let mens = c('#mensagem').value.toLowerCase()
    let mensEnv = c('.mensagem-Env')
    let areaMsv = c('.area-msg-env')
    areaMsv.style.padding = '10px'
   

    if(mens.value != "") {
        let div = document.createElement('div')
        const lue = `<span style="color: black;">você</span> <br><br>`
        let m = document.createTextNode(lue + mens)
        div.appendChild(m)
        mensEnv.appendChild(div)
        div.style.backgroundColor = 'white'
        div.style.marginTop = '10px'
        div.style.borderRadius = '20px'
        div.style.padding = '10px'


        setTimeout(() => {
        if(mens === 'digo o mesmo') {
            let div = document.createElement('div')
            let m = document.createTextNode(frases[0])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        } 
    
     
        else if(mens === 'estou bem e vc') {
            let div = document.createElement('div')
            let m = document.createTextNode(frases[1])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        }
    
    
        else if(mens === 'com certeza') {
            let div = document.createElement('div')
            let m = document.createTextNode(frases[2])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        }
    
        else if(mens === 'não estamos contaminados') {
            let div = document.createElement('div')
            let m = document.createTextNode(frases[3])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        } 
    
        else if(mens === 'cavalo!!!') {
            let div = document.createElement('div')
            let m = document.createTextNode(frases[4])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        } else {
            let div = document.createElement('div')
            let m = document.createTextNode(frasesA[Math.floor(Math.random()*frasesA.length)])
            div.appendChild(m)
            mensEnv.appendChild(div)
            div.style.padding = '10px'
            div.style.textAlign = 'left'
            div.style.backgroundColor = 'white'
            div.style.marginTop = '10px'
            div.style.borderRadius = '20px'
        }
    }, 1000)
    
}
    c('#mensagem').value = ""
    
}