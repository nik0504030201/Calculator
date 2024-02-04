let num1Node = document.querySelector(`#number1`)
let num2Node = document.querySelector(`#number2`)
let outputNode = document.querySelector(`#number3`)
let selectNode = document.querySelector(`#select`)
let btnNode = document.querySelector(`#ravno`)
btnNode.addEventListener(`click`, function () {
    switch (selectNode.value) {
        case `+`:
            outputNode.value = `${Number(num1Node.value) + Number(num2Node.value)}`
            break
        case `-`:
            outputNode.value = `${Number(num1Node.value) - Number(num2Node.value)}`
            break
        case `*`:
            outputNode.value = `${Number(num1Node.value) * Number(num2Node.value)}`
            break
        case `/`:
            outputNode.value = `${Number(num1Node.value) / Number(num2Node.value)}`
            break
        case `^`:
            outputNode.value = `${Number(num1Node.value) ** Number(num2Node.value)}`
            break
        case `no`:
            outputNode.value = `ВЫБЕРИТЕ ДЕЙСТВИЕ`
            break
        default:
            outputNode.value = `ERROR`
    }
})