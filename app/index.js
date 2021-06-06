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
let iterInput = document.querySelector('#iters')

let distance = parseInt(distanceInput.value)
let angle = parseInt(angleInput.value)
let iter = parseInt(iterInput.value)

// Setup
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'F',
    productions: {
        'F': 'F[+F+F]F[-F-F]F'
    },
    distance: distance,
    angle: angle
})
let result = lsystem.generate(iter)

function render() {
    result.distance = parseInt(distanceInput.value)
    result.angle = parseInt(angleInput.value)
    result.draw(turtle)
}

function generateAngRender() {
    result = lsystem.generate(parseInt(iterInput.value))
    render()
}

render()

distanceInput.addEventListener('change', render)
angleInput.addEventListener('change', render)
iterInput.addEventListener('change', generateAngRender)