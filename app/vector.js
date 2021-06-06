/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

export default class Vector {
    static polar(th, r=1) {
        let thr = th * Math.PI / 180
        return new Vector(
            Math.cos(thr), 
            Math.sin(thr)
        ).scale(r)
    }

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(other) {
        return new Vector(
            this.x + other.x,
            this.y + other.y
        )
    }

    scale(scalar) {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        )
    }
}