let numeroA
let operador
let numeroB


function atualizarDisplay() {
    let calculadora_display = document.getElementById("calculadora-display")
    let textContent

    if (!numeroA && !operador && !numeroB) {
        textContent = "0"
    }
    else {
        if (numeroA) {
            textContent = numeroA
        }
        if (operador) {
            textContent += operador
        }
        if (numeroB) {
            textContent += numeroB
        }
    }

    calculadora_display.textContent = textContent
}


function limpar(manterA = false) {
    numeroA = manterA ? numeroA : undefined
    operador = undefined
    numeroB = undefined
    atualizarDisplay()
}


function porcentagem() {
    if (numeroA && !numeroB) {
        numeroA = numeroA / 100
    }

    else if (numeroA && operador && numeroB) {
        switch (operador) {
            case '+':
                numeroA = String(parseFloat(numeroA) + ((numeroB / 100) * numeroA))
                break
            case '-':
                numeroA = numeroA - ((numeroB / 100) * numeroA)
                break
            case '*':
                numeroA = numeroA * ((numeroB / 100))
                break
            case '/':
                numeroA = numeroA / ((numeroB / 100))
                break
        }
        limpar(true)
    }
    atualizarDisplay()
}


function negativar() {
    if ((!numeroA || numeroA == 0)) {
        alert("Digite um número para sua negativa.")
    }

    if (numeroA && !numeroB) {
        numeroA = -1 * numeroA
        atualizarDisplay()
    }

    if (numeroB) {
        numeroB = -1 * numeroB
        atualizarDisplay()
    }
}


function calcular() {
    let numeroA2 = parseFloat(numeroA)
    let numeroB2 = parseFloat(numeroB)
    let resultado
    switch (operador) {
        case '+':
            resultado = numeroA2 + numeroB2
            break
        case '-':
            resultado = numeroA2 - numeroB2
            break
        case '*':
            resultado = numeroA2 * numeroB2
            break
        case '/':
            resultado = numeroA2 / numeroB2
            break
    }

    return String(resultado)
}


function decimal(numero, numeroN) {
    if (numero == '.') {
        if (!numeroN.includes('.')) {
            numeroN += numero
        }
    } else numeroN == '0' ? numeroN = numero : numeroN += numero

    return numeroN
}


function adicionarNumero(numero) {

    if (!operador) {
        if (!numeroA) {
            numeroA = '0'
        }
        numeroA = decimal(numero, numeroA)
    }
    else {
        if (!numeroB) {
            numeroB = '0'
        }
        numeroB = decimal(numero, numeroB)
    }
    atualizarDisplay()
}


function adicionarOperador(opr) {
    if (!operador) {
        operador = opr
        if (!numeroA) {
            numeroA = 0
        }
    }
    else {
        if (!numeroB) {
            operador = opr
        }
        else {
            resultado(true)
        }
    }
    atualizarDisplay()
}


function resultado(continuar = false) {
    if (operador && numeroB) {
        numeroA = calcular()
        operador = continuar ? operador : undefined
        numeroB = undefined
    }
    atualizarDisplay()
}
