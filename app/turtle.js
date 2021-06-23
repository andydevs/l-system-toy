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
        this.config = {
            distance: 100,
            angle: 30,
            radius: 1
        }
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

    left() {
        this.state.angle += this.config.angle
    }

    color(col) {
        this.state.color = col
    }

    right() {
        this.state.angle -= this.config.angle
    }

    _posAt(distance) {
        return this.state.pos.add(
            Vector.polar(this.state.angle, distance)
        )
    }

    _nextPos() {
        return this._posAt(this.config.distance)
    }

    forward() {
        this.state.pos = this._nextPos()
    }

    forwardLine() {
        let newpos = this._nextPos()
        this.screen.drawLine(this.state.pos, newpos, this.state.color, this.state.thickness)
        this.state.pos = newpos
    }

    circle() {
        let center = this._posAt(this.config.radius)
        this.screen.drawCircle(center, this.config.radius, this.state.color)
    }
}