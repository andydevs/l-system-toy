/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import './style/main.scss'

// Bundle script
let canvas = document.querySelector('#mycanvas')
let ctx = canvas.getContext('2d')

// M'draw some stuff
ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.beginPath()
ctx.moveTo(canvas.width/2, 3*canvas.height/4)
ctx.lineTo(canvas.width/2 - 100, 3*canvas.height/4 - 100)
ctx.stroke()