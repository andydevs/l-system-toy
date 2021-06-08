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

// Setup
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'C',
    productions: {
        'b': 'v',
        'r': 'b',
        'o': 'r',
        'y': 'o',
        'C': [
            'yFC',
            'oFC',
            'rFC'
        ],
        'F': [
            'F[y+F+FC][y-F-FC]F',
            'F[y+F-FC][y-F+FC]F',
            'F[y+F+FC]F',
            'F[y+F-FC]F',
            'F[y-F-FC]F',
            'F[y-F+FC]F',
            'FF'
        ]
    },
    distance: parseInt(distanceInput.value),
    angle: parseInt(angleInput.value),
    radius: parseInt(radiusInput.value)
})
let state = lsystem.createState()

function render() {
    state.lsystem.radius = parseInt(radiusInput.value)
    state.lsystem.distance = parseInt(distanceInput.value)
    state.lsystem.angle = parseInt(angleInput.value)
    state.draw(turtle)
}

function generateAndRender() {
    state.generate()
    state.draw(turtle)
}

function resetAndRender() {
    state.reset()
    state.draw(turtle)
}

render()
distanceInput.addEventListener('change', render)
angleInput.addEventListener('change', render)
radiusInput.addEventListener('change', render)
resetButton.addEventListener('click', resetAndRender)
generateButton.addEventListener('click', generateAndRender)