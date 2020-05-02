document.addEventListener("DOMContentLoaded", e => {
    setup()
})

var down = false
var lastx = 0
var lasty = 0

var movx = 0
var movy = 0

var rect = null

function mousedown(x, y) {
    down = true
    lastx = x
    lasty = y
}

function mouseup() {
    down = false
}

function mousemove(x, y) {
    if (!down) return

    let devx = x - lastx
    let devy = y - lasty

    movx += devx
    movy += devy

    rect.style.transform = `translate3d(${movx}px, ${movy}px, 0)`

    lastx = x
    lasty = y
}



function setup() {
    let canvas = document.querySelector('.canvas')
    rect = document.querySelector('.rect')

    canvas.addEventListener('mousedown', e => {
        mousedown(e.clientX, e.clientY)
    })

    canvas.addEventListener('mouseup', e => {
        mouseup()
    })

    canvas.addEventListener('mousemove', e => {
        mousemove(e.clientX, e.clientY)
    })



    canvas.addEventListener('touchstart', e => {
        mousedown(e.touches[0].clientX, e.touches[0].clientY)
    })

    canvas.addEventListener('touchend', e => {
        mouseup()
    })

    canvas.addEventListener('touchmove', e => {
        // console.log(e)
        mousemove(e.touches[0].clientX, e.touches[0].clientY)
    })
}

