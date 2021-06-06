/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector';
import TurtleState from './turtlestate';

export default class Turtle {
    constructor(screen, distance=100, angle=30) {
        this.screen = screen
        this.config = { distance, angle }
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

    left() {
        this.state = this.state.incrementAngle(this.config.angle)
    }

    right() {
        this.state = this.state.incrementAngle(-this.config.angle)
    }

    forward() {
        this.state = this.state.incrementPos(
            Vector.polar(this.state.angle, this.config.distance)
        )
    }

    forwardLine() {
        let newpos = this.state.pos.add(
            Vector.polar(this.state.angle, this.config.distance)
        )
        this.screen.drawLine(this.state.pos, newpos)
        this.state = this.state.newPos(newpos)
    }
}