/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
import Vector from './vector';

// Default turtle state
const DEFAULT_STATE = {
    pos: new Vector(0, 0),
    angle: 90,
    color: 'k',
    thickness: 1
}

// Default turtle param configuration
const DEFAULT_CONFIG = {
    distance: 100,
    angle: 30,
    radius: 1
}

/**
 * Turtle system that processes 
 * turtle lang and draws on
 * the attached screen
 */
export default class Turtle {
    /**
     * Construct turtle
     * 
     * @param {Screen} screen screen to attach this turtle to
     */
    constructor(screen) {
        this.screen = screen
        this.config = Object.assign({}, DEFAULT_CONFIG)
        this.state = Object.assign({}, DEFAULT_STATE)
        this.stack = []
    }

    /**
     * Runs the turtle lang string and draws the respective
     * shape on the screen
     * 
     * @param {string} string turtle lang string to process
     */
    process(string) {
        for (let c of string) {
            switch (c) {
                case 'F': this.forwardLine(); break;
                case 'f': this.forward(); break;
                case '+': this.left(); break;
                case '-': this.right(); break;
                case '[': this.push(); break;
                case ']': this.pop(); break;
                case '(': this.thicker(); break;
                case ')': this.thinner(); break;
                case 'C': this.circle(); break;
                case 'k': this.color('k'); break;
                case 'r': this.color('r'); break;
                case 'o': this.color('o'); break;
                case 'y': this.color('y'); break;
                case 'g': this.color('g'); break;
                case 'b': this.color('b'); break;
                case 'v': this.color('v'); break;
                case 'n': this.color('n'); break;
                default: break;
            }
        }
    }

    /**
     * Clear screen and reset turtle state
     */
    reset() {
        this.screen.clear()
        this.state = Object.assign({}, DEFAULT_STATE)
        this.stack = []
    }

    /**
     * Push current state to stack
     */
    push() {
        this.stack.push(Object.assign({}, this.state))
    }

    /**
     * Pop last stack state
     */
    pop() {
        this.state = this.stack.pop()
    }

    /**
     * Increase line thickness
     */
    thicker() {
        this.state.thickness += 1
    }

    /**
     * Decrease line thickness
     */
    thinner() {
        this.state.thickness -= 1
    }

    /**
     * Set color of line
     * 
     * @param {string} col new line color
     */
    color(col) {
        this.state.color = col
    }

    /**
     * Turn left
     */
    left() {
        this.state.angle += this.config.angle
    }

    /**
     * Turn right
     */
    right() {
        this.state.angle -= this.config.angle
    }

    /**
     * Go forward but don't draw line
     */
    forward() {
        this.state.pos = this._nextPos()
    }

    /**
     * Go forward and draw line
     */
    forwardLine() {
        let newpos = this._nextPos()
        this.screen.drawLine(this.state.pos, newpos, this.state.color, this.state.thickness)
        this.state.pos = newpos
    }

    /**
     * Create a circle
     */
    circle() {
        let center = this._posAt(this.config.radius)
        this.screen.drawCircle(center, this.config.radius, this.state.color)
    }

    // PRIVATE

    /**
     * The position of the turtle if it had traveled the given distance
     * 
     * @param {float} distance distance to travel
     * 
     * @returns position of turtle if it traveled the given distance
     */
    _posAt(distance) {
        return this.state.pos.add(
            Vector.polar(this.state.angle, distance)
        )
    }

    /**
     * The next positon of the turtle after a forward or forwardLine command
     * 
     * @returns next positon of the turtle after a forward or forwardLine command
     */
    _nextPos() {
        return this._posAt(this.config.distance)
    }
}