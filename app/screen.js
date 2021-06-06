/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector'

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

    drawLine(fm, to) {
        let fmc = this.center(fm)
        let toc = this.center(to)
        this.ctx.beginPath()
        this.ctx.moveTo(fmc.x, fmc.y)
        this.ctx.lineTo(toc.x, toc.y)
        this.ctx.stroke()
    }
}