/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import './style/main.scss'
import Screen from './screen'
import Turtle from './turtle'

// Turtle
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen)

// M'draw some stuff
screen.clear()
turtle.forwardLine()
turtle.push()
turtle.left()
turtle.forwardLine()
turtle.right()
turtle.right()
turtle.forwardLine()
turtle.pop()
turtle.right()
turtle.forwardLine()
turtle.left()
turtle.left()
turtle.forwardLine()
turtle.left()
turtle.forwardLine()