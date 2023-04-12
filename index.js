const _text = document.getElementById("textInput")
const _encrypt = document.getElementById("encript")
const _decrypt = document.getElementById("decript")



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
        return
    }
    // encripar la informacion del textarea.
    const encodedText = encode(textValue,keys)
    const decodedText = decode(encodedText, keys)

    // escribir el resultado en el area de response.

    console.log(encodedText)
    console.log(decodedText)
})

