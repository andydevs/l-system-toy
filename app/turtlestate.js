/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector'

export default class TurtleState {
    constructor(pos=new Vector(0, 0), angle=90) {
        this.pos = pos
        this.angle = angle
    }

    newPos(pos) {
        return new TurtleState(pos, this.angle)
    }

    newAngle(angle) {
        return new TurtleState(this.pos, angle)
    }

    incrementPos(shift) {
        return new TurtleState(this.pos.add(shift), this.angle)
    }

    incrementAngle(shift) {
        return new TurtleState(this.pos, this.angle + shift)
    }
}