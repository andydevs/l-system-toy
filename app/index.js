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

// Setup
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'F',
    productions: {
        'F': 'F[+F]F[-F]F'
    },
    distance: 5,
    angle: 45
})
let result = lsystem.generate(5)
result.draw(turtle)