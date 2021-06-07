/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector'

export default class TurtleState {
    constructor(pos=new Vector(0, 0), angle=90, color='k') {
        this.pos = pos
        this.angle = angle
        this.color = color
    }

    newPos(pos) {
        return new TurtleState(pos, this.angle, this.color)
    }

    newAngle(angle) {
        return new TurtleState(this.pos, angle, this.color)
    }

    newColor(color) {
        return new TurtleState(this.pos, this.angle, color)
    }

    incrementPos(shift) {
        return this.newPos(this.pos.add(shift))
    }

    incrementAngle(shift) {
        return this.newAngle(this.angle + shift)
    }
}