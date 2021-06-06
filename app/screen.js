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
    }

    clear() {
        this.ctx.clearRect(0, 0, 
            this.canvas.width, 
            this.canvas.height)
    }

    center(v) {
        return new Vector(
            this.canvas.width/2 + v.x,
            3*this.canvas.height/4 - v.y
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