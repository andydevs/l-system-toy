/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector';
import TurtleState from './turtlestate';

export default class Turtle {
    constructor(screen) {
        this.screen = screen
        this.state = new TurtleState()
        this.stack = []
    }

    reset() {
        this.screen.clear()
        this.state = new TurtleState()
        this.stack = []
    }

    push() {
        this.stack.push(this.state)
    }

    pop() {
        this.state = this.stack.pop()
    }

    left(angle) {
        this.state = this.state.incrementAngle(angle)
    }

    right(angle) {
        this.state = this.state.incrementAngle(-angle)
    }

    forward(distance) {
        this.state = this.state.incrementPos(
            Vector.polar(this.state.angle, distance)
        )
    }

    forwardLine(distance) {
        let newpos = this.state.pos.add(
            Vector.polar(this.state.angle, distance)
        )
        this.screen.drawLine(this.state.pos, newpos)
        this.state = this.state.newPos(newpos)
    }

    circle(radius) {
        this.forward(radius)
        this.screen.drawCircle(this.state.pos, radius)
        this.forward(-radius)
    }
}