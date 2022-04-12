/*const machine1 = document.getElementById('textWriter')
const machine2 = document.querySelector('#textWriter2')
const machine3 = document.getElementById("textWriter3")
const machine4 = document.getElementById("textWriter4")

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

machineWriter3('* Software * Development * Apprentice', 150, machine3)

const machineWriter4 = (text='', text2 = '',tiempo = 100, tiempo2 = 100, etiqueta='') => {
    let arrayCharact = text.split('')
    let arrayCharacte = text2.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let i__ = 0
    let aux = 0
    let aux__ = 0
    let aux__2 = 0
    let j = text.length
    let n = text2.length
    let write = setInterval(function(){
        if(aux === 0){
            if(i === arrayCharact.length){
                etiqueta.innerHTML = text.substring(0, j)
                j--
                if(j === 0){
                    etiqueta.innerHTML = ''
                    i = 0
                    j = text.length
                    aux = 1
                }
            }else{
                if(arrayCharact[i] === '*'){
                    etiqueta.innerHTML += '</br>'
                    
                }else{
                    etiqueta.innerHTML += arrayCharact[i]
                    i = i + 1
                }       
            }
        }else{    
            if(i__ === arrayCharacte.length){
                etiqueta.innerHTML = text2.substring(0, n)
                n--
                if(n === 0){
                    etiqueta.innerHTML = ''
                    i__ = 0
                    n = text2.length
                    aux = 0  
                }
            }else{
                if(arrayCharacte[i__] === '*'){
                    etiqueta.innerHTMLL += '</br>'
                    
                }else{
                    etiqueta.innerHTML += arrayCharacte[i__]
                    i__ = i__+1
                }     
            }   
        }
    }, tiempo2)
}

machineWriter4('* Software * Development * Apprentice','* Descubre el fuego * que hay en ti.', 150, 150, machine4)*/


