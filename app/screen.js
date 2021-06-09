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
    'v': '#a0a',
    'n': '#530'
}

/**
 * Wrapper around canvas to make it easier to
 * draw objects around canvas
 */
export default class Screen {
    /**
     * Construct screen around canvas
     * 
     * @param {string} selector html selctor of canvas object
     */
    constructor(selector) {
        this.canvas = document.querySelector(selector)
        this.ctx = this.canvas.getContext('2d')
        this.shift = 0.98
    }

    /**
     * Clear screen
     */
    clear() {
        this.ctx.clearRect(0, 0, 
            this.canvas.width, 
            this.canvas.height)
    }

    /**
     * Converts vector from world coords to screen coords
     * 
     * @param {Vector} v input vector in world coords
     * 
     * @returns vector converted to screen coords
     */
    center(v) {
        return new Vector(
            Math.round(this.canvas.width/2) + v.x,
            Math.round(this.shift*this.canvas.height) - v.y
        )
    }

    /**
     * Draw line on screen
     * 
     * @param {Vector} fm from vector
     * @param {Vector} to to vector
     * @param {string} c color
     * @param {int} w line width
     */
    drawLine(fm, to, c='k', w=1) {
        let fmc = this.center(fm)
        let toc = this.center(to)
        this.ctx.strokeStyle = colors[c]
        this.ctx.lineWidth = w
        this.ctx.beginPath()
        this.ctx.moveTo(fmc.x, fmc.y)
        this.ctx.lineTo(toc.x, toc.y)
        this.ctx.stroke()
        this.ctx.lineWidth = 1
    }

    /**
     * Draw circle on screen
     * 
     * @param {Vector} ct circle center
     * @param {int} r circle radius
     * @param {string} c circle color
     */
    drawCircle(ct, r, c='k') {
        let cc = this.center(ct)
        this.ctx.strokeStyle = colors[c]
        this.ctx.beginPath()
        this.ctx.arc(cc.x, cc.y, r, 0, 2*Math.PI)
        this.ctx.stroke()
    }
}