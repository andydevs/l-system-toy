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

    process(string) {
        this.reset()
        for (let c of string) {
            switch (c) {
                case 'F': this.forwardLine(); break;
                case 'f': this.forward(); break;
                case '+': this.left(); break;
                case '-': this.right(); break;
                case '[': this.push(); break;
                case ']': this.pop(); break;
                case '(': this.thicker(); break;
                case ')': this.thinner(); break;
                case 'C': this.circle(); break;
                case 'k': this.color('k'); break;
                case 'r': this.color('r'); break;
                case 'o': this.color('o'); break;
                case 'y': this.color('y'); break;
                case 'g': this.color('g'); break;
                case 'b': this.color('b'); break;
                case 'v': this.color('v'); break;
                case 'n': this.color('n'); break;
                default: break;
            }
        }
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

    _posAt(distance) {
        return this.state.pos.add(
            Vector.polar(this.state.angle, distance)
        )
    }

    _nextPos() {
        return this._posAt(this.config.distance)
    }
}