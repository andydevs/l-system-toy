/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import LSystemState from './lsystemstate'

export default class LSystem {
    constructor({ axiom='', productions='', distance=100, angle=30, radius=1 }) {
        this.axiom = axiom
        this.productions = productions
        this.distance = distance
        this.angle = angle
        this.radius = radius
    }

    createState() {
        return new LSystemState(this)
    }

    process(string) {
        let news = ''
        for (let i = 0; i < string.length; ++i) {
            let c = string[i]
            news += this.productions.hasOwnProperty(c)
                ? this.productions[c] : c
        }
        return news
    }
}