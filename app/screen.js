/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector'

// Color map
const colors = {
    'k': 'black',
    'r': 'red',
    'o': 'orange',
    'y': '#aa0',
    'g': 'green',
    'b': 'blue',
    'v': '#a0a'
}

export default class Screen {
    constructor(selector) {
        this.canvas = document.querySelector(selector)
        this.ctx = this.canvas.getContext('2d')
        this.shift = 0.98
    }

    clear() {
        this.ctx.clearRect(0, 0, 
            this.canvas.width, 
            this.canvas.height)
    }

    center(v) {
        return new Vector(
            Math.round(this.canvas.width/2) + v.x,
            Math.round(this.shift*this.canvas.height) - v.y
        )
    }

    drawLine(fm, to, c='k', w=1) {
        let fmc = this.center(fm)
        let toc = this.center(to)
        this.ctx.strokeStyle = colors[c]
        this.ctx.lineWidth = w
        this.ctx.beginPath()
        this.ctx.moveTo(fmc.x, fmc.y)
        this.ctx.lineTo(toc.x, toc.y)
        this.ctx.stroke()
    }

    drawCircle(ct, r, c='k') {
        let cc = this.center(ct)
        this.ctx.strokeStyle = colors[c]
        this.ctx.beginPath()
        this.ctx.arc(cc.x, cc.y, r, 0, 2*Math.PI)
        this.ctx.stroke()
    }
}