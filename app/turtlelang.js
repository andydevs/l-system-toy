/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

export default function processTurtleLang(string, turtle) {
    turtle.reset()
    for (let i = 0; i < string.length; i++) {
        const c = string[i];
        switch (c) {
            case 'F':
                turtle.forwardLine()
                break;
            case 'f':
                turtle.forward()
                break;
            case '+':
                turtle.left()
                break;
            case '-':
                turtle.right()
                break;
            case '[':
                turtle.push()
                break;
            case ']':
                turtle.pop()
                break;
            default:
                console.error(
                    'Invalid turtlelang char: ' + c 
                    + ' (at ' + i + ')')
                break;
        }
    }
}