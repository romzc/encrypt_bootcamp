const _text = document.getElementById("textInput")
const _encrypt = document.getElementById("encript")
const _decrypt = document.getElementById("decript")
// containers
const _prevContainer = document.getElementById("response_prev")
const _respContainer = document.getElementById("response_resp")

// --
const _textResponse = document.getElementById("response_resp-text")
const _copyButton = document.getElementById("response_resp-copy")


const keys = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
}

/**
 * 
 * @param {String} value 
 * @param {object} keys 
 * @returns 
 */
function encode(value, obj) {
    const arrayString = value.split('')

    const newString = arrayString.map( item => {
        if( obj.hasOwnProperty(item)) return obj[item]
        return item
    })

    return newString.join('')
}

/**
 * 
 * @param {String} value 
 * @param {Obj} obj 
 * @returns 
 */
function decode(value, obj) {
    let response = value
    for( let key in obj ) {
        let regex = new RegExp(obj[key], 'g');
        response = response.replaceAll(regex, key);
    }
    return response
}

_encrypt.addEventListener('click', (event) => {
    // recuperar informacion del textarea.
    const textValue = _text.value

    // verificar que tiene informacion.
    if( !textValue ) {
        // do nothing
        if(!_prevContainer.classList.contains("show")) {
            _prevContainer.classList.add("show")
        }
    
        if(_respContainer.classList.contains("show")) {
            _respContainer.classList.remove("show")
        }
        return
    }
    else {
        // encripar la informacion del textarea.
        const encodedText = encode(textValue,keys)
    
        // escribir el resultado en el area de response.
        if(_prevContainer.classList.contains("show")) {
            _prevContainer.classList.remove("show")
        }
    
        if(!_respContainer.classList.contains("show")) {
            _respContainer.classList.add("show")
        }
        _textResponse.textContent = encodedText
    }
})

_decrypt.addEventListener('click', (event) => {
    // recuperar informacion del textarea.
    const textValue = _text.value

    // verificar que tiene informacion.
    if( !textValue ) {
        // do nothing
        if(!_prevContainer.classList.contains("show")) {
            _prevContainer.classList.add("show")
        }
    
        if(_respContainer.classList.contains("show")) {
            _respContainer.classList.remove("show")
        }
        return
    }
    else {
        // encripar la informacion del textarea.
        const encodedText = decode(textValue,keys)
    
        // escribir el resultado en el area de response.
        if(_prevContainer.classList.contains("show")) {
            _prevContainer.classList.remove("show")
        }
    
        if(!_respContainer.classList.contains("show")) {
            _respContainer.classList.add("show")
        }
        _textResponse.textContent = encodedText
    }
})

_copyButton.addEventListener('click', (event) => {
    const aux = _textResponse.innerHTML
    navigator.clipboard.writeText(aux)
})