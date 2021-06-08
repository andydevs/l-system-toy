/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import LSystemState from './lsystemstate'

export default class LSystem {
    constructor({ axiom='', productions={}, distance=100, angle=30, radius=1 }) {
        this.axiom = axiom
        this.productions = productions
        this.distance = distance
        this.angle = angle
        this.radius = radius
    }

    createState() {
        return new LSystemState(this)
    }

    processCommand(c) {
        if (this.productions.hasOwnProperty(c)) {
            if (this.productions[c] instanceof Array) {
                let index = Math.floor(Math.random()*this.productions[c].length)
                return this.productions[c][index]
            }
            else {
                return this.productions[c]
            }
        }
        else {
            return c
        }
    }

    process(string) {
        let news = ''
        for (let i = 0; i < string.length; ++i) {
            news += this.processCommand(string[i])
        }
        return news
    }
}