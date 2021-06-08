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
let resetButton = document.querySelector('#reset')
let generateButton = document.querySelector('#generate')

// Setup screen, turtle, and lsystem
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'gFC',
    productions: {
        'g': 'k',
        'C': [
            'gFC',
            'gFC',
            'gFC'
        ],
        'F': [
            '(F)[g+F+FC][g-F-FC](F)',
            '(F)[g+F-FC][g-F+FC](F)',
            '(F)[g+F+FC](F)',
            '(F)[g+F-FC](F)',
            '(F)[g-F-FC](F)',
            '(F)[g-F+FC](F)',
            '(FF)'
        ]
    },
    distance: parseInt(distanceInput.value),
    angle: parseInt(angleInput.value),
    radius: parseInt(radiusInput.value)
})

/**
 * Render updated L-System string with new parameters
 */
function render() {
    lsystem.radius = parseInt(radiusInput.value)
    lsystem.distance = parseInt(distanceInput.value)
    lsystem.angle = parseInt(angleInput.value)
    lsystem.draw(turtle)
}

/**
 * Generate updated L-System result and render
 */
function generateAndRender() {
    lsystem.generate()
    lsystem.draw(turtle)
}

/**
 * Reset L-System result and render
 */
function resetAndRender() {
    lsystem.reset()
    lsystem.draw(turtle)
}

// Hook event listener and initial render
distanceInput.addEventListener('change', render)
angleInput.addEventListener('change', render)
radiusInput.addEventListener('change', render)
resetButton.addEventListener('click', resetAndRender)
generateButton.addEventListener('click', generateAndRender)
render()