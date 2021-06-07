/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import './style/main.scss'
import Screen from './screen'
import Turtle from './turtle'
import LSystem from './lsystem'

// Input values
let distanceInput = document.querySelector('#distance')
let angleInput = document.querySelector('#angle')
let radiusInput = document.querySelector('#radius')
let iterInput = document.querySelector('#iters')

// Setup
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'C',
    productions: {
        'C': 'FC',
        'F': 'F[+F+FC]F[-F-FC]F'
    },
    distance: parseInt(distanceInput.value),
    angle: parseInt(angleInput.value),
    radius: parseInt(radiusInput.value)
})
let result = lsystem.generate(parseInt(iterInput.value))

function render() {
    result.radius = parseInt(radiusInput.value)
    result.distance = parseInt(distanceInput.value)
    result.angle = parseInt(angleInput.value)
    result.draw(turtle)
}

function generateAngRender() {
    result = lsystem.generate(parseInt(iterInput.value))
    render()
}

// 
render()
distanceInput.addEventListener('change', render)
angleInput.addEventListener('change', render)
radiusInput.addEventListener('change', render)
iterInput.addEventListener('change', generateAngRender)