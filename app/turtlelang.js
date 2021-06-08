/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

export default function processTurtleLang(string, turtle, config) {
    // Get parameters
    let { distance, angle, radius } = config
    turtle.reset()

    // Turtle lang
    let commands = {
        'F': () => turtle.forwardLine(distance),
        'f': () => turtle.forward(distance),
        '+': () => turtle.left(angle),
        '-': () => turtle.right(angle),
        '[': () => turtle.push(),
        ']': () => turtle.pop(),
        'C': () => turtle.circle(radius),
        'k': () => turtle.color('k'),
        'r': () => turtle.color('r'),
        'o': () => turtle.color('o'),
        'y': () => turtle.color('y'),
        'g': () => turtle.color('g'),
        'b': () => turtle.color('b'),
        'v': () => turtle.color('v'),
    }

    // Process commands
    for (let i = 0; i < string.length; i++) {
        const c = string[i];
        const command = commands.hasOwnProperty(c) ? commands[c] 
            : () => console.error(`Invalid turtlelang char: ${c} (at ${i})`)
        command()
    }
}