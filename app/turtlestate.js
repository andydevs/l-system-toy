/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector'

export default class TurtleState {
    constructor(pos=new Vector(0, 0), angle=90, color='k', thickness=1) {
        this.pos = pos
        this.angle = angle
        this.color = color
        this.thickness = thickness
    }

    newPos(pos) {
        return new TurtleState(pos, this.angle, this.color, this.thickness)
    }

    newAngle(angle) {
        return new TurtleState(this.pos, angle, this.color, this.thickness)
    }

    newColor(color) {
        return new TurtleState(this.pos, this.angle, color, this.thickness)
    }

    newThickness(thickness) {
        return new TurtleState(this.pos, this.angle, this.color, thickness)
    }

    incrementPos(shift) {
        return this.newPos(this.pos.add(shift))
    }

    incrementAngle(shift) {
        return this.newAngle(this.angle + shift)
    }

    incrementThickness() {
        return this.newThickness(this.thickness + 1)
    }

    decrementThickness() {
        return this.newThickness(this.thickness - 1)
    }
}