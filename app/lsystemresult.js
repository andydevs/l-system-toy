/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import processTurtleLang from './turtlelang';

export default class LSystemResult {
    constructor(string, distance, angle) {
        this.string = string
        this.distance = distance
        this.angle = angle
    }

    draw(turtle) {
        processTurtleLang(this.string, turtle, this)
    }
}