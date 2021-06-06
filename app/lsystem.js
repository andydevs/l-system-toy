/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import LSystemResult from './lsystemresult';

export default class LSystem {
    constructor({ axiom='', productions='', distance=100, angle=30 }) {
        this.axiom = axiom
        this.productions = productions
        this.distance = distance
        this.angle = angle
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

    generate(n=1) {
        let string = this.axiom
        for (let i = 0; i < n; ++i) {
            string = this.process(string)
        }
        return new LSystemResult(string, this.distance, this.angle)
    }
}