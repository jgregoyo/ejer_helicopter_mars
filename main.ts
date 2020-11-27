let T1 = 0
let T2 = 0
let T3 = 0
function Temperatura_promedio () {
    T1 = input.temperature()
    basic.pause(5000)
    T2 = input.temperature()
    basic.pause(5000)
    T3 = input.temperature()
    basic.pause(5000)
    return (T1 + T2 + T3) / 3
}
basic.forever(function () {
    basic.showNumber(Temperatura_promedio())
})
