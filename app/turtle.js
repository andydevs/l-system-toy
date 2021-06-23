/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector';

export default class Turtle {
    constructor(screen) {
        this.screen = screen
        this.state = {
            pos: new Vector(0, 0),
            angle: 90,
            color: 'k',
            thickness: 1
        }
        this.stack = []
    }

    reset() {
        this.screen.clear()
        this.state = {
            pos: new Vector(0, 0),
            angle: 90,
            color: 'k',
            thickness: 1
        }
        this.stack = []
    }

    push() {
        this.stack.push(Object.assign({}, this.state))
    }

    pop() {
        this.state = this.stack.pop()
    }

    thicker() {
        this.state.thickness += 1
    }

    thinner() {
        this.state.thickness -= 1
    }

    left(angle) {
        this.state.angle += angle
    }

    color(col) {
        this.state.color = col
    }

    right(angle) {
        this.state.angle -= angle
    }

    _nextPos(distance) {
        return this.state.pos.add(
            Vector.polar(this.state.angle, distance)
        )
    }

    forward(distance) {
        this.state.pos = this._nextPos(distance)
    }

    forwardLine(distance) {
        let newpos = this._nextPos(distance)
        this.screen.drawLine(this.state.pos, newpos, this.state.color, this.state.thickness)
        this.state.pos = newpos
    }

    circle(radius) {
        this.forward(radius)
        this.screen.drawCircle(this.state.pos, radius, this.state.color)
        this.forward(-radius)
    }
}