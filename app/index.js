/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import './style/main.scss'
import Screen from './screen'
import Turtle from './turtle'
import processTurtleLang from './turtlelang';

// M'drawsomestuff
let screen = new Screen('#mycanvas')
let turtle = new Turtle(screen, 50)
processTurtleLang('[+F--F]-F++F-', turtle)