const machine1 = document.getElementById('textWriter')
const machine2 = document.querySelector('#textWriter2')
const machine3 = document.querySelector('#textWriter3')
const machine4 = document.querySelector('#textWriter4')

const machineWriter = (text='',tiempo = 200,  etiqueta='') => {
    let arrayCharact = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let write = setInterval(function(){
        etiqueta.innerHTML += arrayCharact[cont]
        cont++
        if(cont === arrayCharact.length){
            clearInterval(write)
        }
    }, tiempo)
}

const machineWriter2 = (text='',tiempo = 200,  etiqueta='') => {
    let arrayCharact = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let write = setInterval(function(){
        etiqueta.innerHTML += arrayCharact[cont]
        cont++
        if(cont === arrayCharact.length){
            clearInterval(write)
        }
    }, tiempo)
}

const machineWriter3 = (text='',tiempo = 200,  etiqueta='') => {
    let arrayCharact = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j = text.length
    let write = setInterval(function(){
        if(i === arrayCharact.length){
            etiqueta.innerHTML = text.substring(0, j)
            j--
            if(j === 0){
                etiqueta.innerHTML = ''
                i = 0
                j = text.length
            }
        }else{
            etiqueta.innerHTML += arrayCharact[i]
            i++
        }
    }, tiempo)
}



const machineWriter4 = (text='', text2 = '',tiempo = 100, tiempo2 = 100, etiqueta='') => {
    let arrayCharact = text.split('')
    let arrayCharacte = text2.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let aux = 0
    let write = setInterval(function(){
    if(aux === 0){
        if(arrayCharact[i] === '*'){
            etiqueta.innerHTML += '</br>'
        }else{
            etiqueta.innerHTML += arrayCharact[i]
        }
        if(i === arrayCharact.length){
            etiqueta.innerHTML = ''
            i = 0
            aux = 1
        }
        i++
    }else{    
        if(arrayCharacte[i] === '*'){
            etiqueta.innerHTML += '</br>'
        }else{
            etiqueta.innerHTML += arrayCharacte[i]
        }
        if(i === arrayCharacte.length){
            etiqueta.innerHTML = ''
            i = 0
            aux = 0
        }
        i++
    }
    }, tiempo2)
}

machineWriter4('* Software * Development * Apprentice','* Descubre el fuego * que hay en ti.', 150, 150, machine4)


