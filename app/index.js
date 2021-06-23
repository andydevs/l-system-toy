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
import Controls from './controls';

// Setup screen, turtle, and lsystem
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)
let lsystem = new LSystem({
    axiom: 'gFC',
    productions: {
        'g': 'n',
        'r': 'n',
        'y': 'b',
        'b': 'v',
        'v': 'n',
        'F': [
            '(F)[g+F+FC][g-F-FC](F)',
            '(F)[g+F-FC][g-F+FC](F)',
            '(F)[g+F+FC](F)',
            '(F)[g+F-FC](F)',
            '(F)[g-F-FC](F)',
            '(F)[g-F+FC](F)',
            '(FF)'
        ]
    }
})
let controls = new Controls({
    onRender() {
        lsystem.distance = this.distance
        lsystem.angle = this.angle
        lsystem.radius = this.radius
        lsystem.draw(turtle)
    },
    onGenerate() {
        lsystem.generate()
        lsystem.draw(turtle)
    },
    onReset() {
        lsystem.reset(),
        lsystem.draw(turtle)
    }
})