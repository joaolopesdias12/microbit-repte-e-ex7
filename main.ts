let x = 2
let y = 2
let accY = 0
let accX = 0
basic.forever(function on_forever() {
    
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX <= 150 && x > 0) {
        x = x - 1
    } else if (accX > 150 && x < 4) {
        x = x + 1
    } else if (accY <= 150 && y > 0) {
        y = y - 1
    } else if (accY > 150 && y < 4) {
        y = y + 1
    }
    
})
