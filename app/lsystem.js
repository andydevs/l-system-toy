/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Holds L-System configuration, including preferred distance, angle, and leaf radius
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
     * Process command character
     * 
     * @param {char} c command character
     * 
     * @returns corresponding production string
     */
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

    /**
     * Process lsystem string
     * 
     * @param {string} string input command string
     * 
     * @returns Resulting string
     */
    process(string) {
        let news = ''
        for (let i = 0; i < string.length; ++i) {
            news += this.processCommand(string[i])
        }
        return news
    }

    /**
     * Run generation routine on new string
     */
    generate() {
        this.string = this.process(this.string)
    }
}