/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Contains information and logic for
 * generating turtle lang strings via
 * an L-System
 */
export default class LSystem {
    /**
     * Constructor
     * 
     * @param {object} param0 L-System options
     */
    constructor({ axiom='', productions={} }) {
        this.axiom = axiom
        this.productions = productions
        this.reset()
    }

    /**
     * Reset current L-System state
     */
    reset() {
        this.string = this.axiom
    }

    /**
     * Run generation routine on new string
     */
    generate() {
        let old = this.string
        this.string = ''
        for (let c of old) {
            this.string += this._processCommand(c)
        }
    }

    // PRIVATE

    /**
     * Process command character
     * 
     * @param {char} c command character
     * 
     * @returns corresponding production string
     */
    _processCommand(c) {
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
}