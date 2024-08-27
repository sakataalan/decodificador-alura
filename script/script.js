function criptografarTexto() {
    let textoEntrada = document.getElementById("inputText").value;
    let textoCriptografado = "";

    if (/[^a-z\s]/.test(textoEntrada)) {
        alert("Por favor, digite apenas letras minúsculas.");
        return;
    }

    for (let i = 0; i < textoEntrada.length; i++) {
        let char = textoEntrada[i];
        if (char >= 'a' && char <= 'z') {
            let proximoChar = String.fromCharCode(char.charCodeAt(0) + 1);
            if (proximoChar > 'z') {
                proximoChar = 'a';
            }
            textoCriptografado += proximoChar;
        } else {
            textoCriptografado += char;
        }
    }
    document.getElementById("output").innerHTML = `
        <p id="text-to-copy">${textoCriptografado}</p>
        <div class="buttons">
            <button class="btn copiar" onclick="copiarTexto()">Copiar</button>
        </div>
    `;
}

function descriptografarTexto() {
    let textoEntrada = document.getElementById("inputText").value;
    let textoDescriptografado = "";

    for (let i = 0; i < textoEntrada.length; i++) {
        let char = textoEntrada[i];
        if (char >= 'a' && char <= 'z') {
            let proximoChar = String.fromCharCode(char.charCodeAt(0) - 1);
            if (proximoChar < 'a') {
                proximoChar = 'z';
            }
            textoDescriptografado += proximoChar;
        } else {
            textoDescriptografado += char;
        }
    }
    document.getElementById("output").innerHTML = `
        <p id="text-to-copy">${textoDescriptografado}</p>
        <div class="buttons">
            <button class="btn copiar" onclick="copiarTexto()">Copiar</button>
        </div>
    `;
}

function copiarTexto() {
    let copyText = document.getElementById("text-to-copy");
    const textarea = document.createElement('textarea');
    textarea.value = copyText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.body.removeChild(textarea);
}
