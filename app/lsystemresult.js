/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import processTurtleLang from './turtlelang';

export default class LSystemResult {
    constructor(string, distance, angle, radius) {
        this.string = string
        this.distance = distance
        this.angle = angle
        this.radius = radius
    }

    draw(turtle) {
        processTurtleLang(this.string, turtle, this)
    }
}