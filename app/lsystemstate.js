/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import processTurtleLang from './turtlelang';

export default class LSystemState {
    constructor(lsystem) {
        this.lsystem = lsystem
        this.string = this.lsystem.axiom
    }

    reset() {
        this.string = this.lsystem.axiom
    }

    generate() {
        this.string = this.lsystem.process(this.string)
    }

    draw(turtle) {
        processTurtleLang(this.string, turtle, this.lsystem)
    }
}