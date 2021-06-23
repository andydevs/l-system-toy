/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Basic 2D vector class
 */
export default class Vector {
    /**
     * Return vector created from polar coords
     * 
     * @param {float} th theta angle in degrees
     * @param {float} r radius of vector
     * 
     * @returns Vector from polar coords
     */
    static polar(th, r=1) {
        let thr = th * Math.PI / 180
        return new Vector(
            Math.cos(thr), 
            Math.sin(thr)
        ).scale(r)
    }

    /**
     * Construct vector from x and y components
     * 
     * @param {float} x x value of vector
     * @param {float} y y value of vector
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * Add other vector to this vector and return result
     * 
     * @param {Vector} other other vector to add
     * 
     * @returns sum of both vectors
     */
    add(other) {
        return new Vector(
            this.x + other.x,
            this.y + other.y
        )
    }

    /**
     * Scale vector by scalar and return result
     * 
     * @param {float} scalar scalar value
     * 
     * @returns scaled vector
     */
    scale(scalar) {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        )
    }
}