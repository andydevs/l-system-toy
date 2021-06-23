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
        turtle.config.distance = this.distance
        turtle.config.angle = this.angle
        turtle.config.radius = this.radius
        turtle.reset()
        turtle.process(lsystem.string)
    },
    onGenerate() {
        lsystem.generate()
        turtle.reset()
        turtle.process(lsystem.string)
    },
    onReset() {
        lsystem.reset(),
        turtle.reset()
        turtle.process(lsystem.string)
    }
})