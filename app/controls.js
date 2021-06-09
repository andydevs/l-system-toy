/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Handles input controls
 */
export default class Controls {
    /**
     * Construct
     * 
     * @param {object} param0 callbacks
     */
    constructor({ onRender=() => {}, onReset=() => {}, onGenerate=() => {} }) {
        this.distanceInput = document.querySelector('#distance')
        this.angleInput = document.querySelector('#angle')
        this.radiusInput = document.querySelector('#radius')
        this.resetButton = document.querySelector('#reset')
        this.generateButton = document.querySelector('#generate')

        // Bind callbacks
        let bOnRender = onRender.bind(this)
        let bOnReset = onReset.bind(this)
        let bOnGenerate = onGenerate.bind(this)

        // Add event listener
        this.distanceInput.addEventListener('change', bOnRender)
        this.angleInput.addEventListener('change', bOnRender)
        this.radiusInput.addEventListener('change', bOnRender)
        this.resetButton.addEventListener('click', bOnReset)
        this.generateButton.addEventListener('click', bOnGenerate)

        // Initial render call
        bOnRender()
    }

    /**
     * Get distance value
     */
    get distance() {
        return parseInt(this.distanceInput.value)
    }

    /**
     * Get angle value
     */
    get angle() {
        return parseInt(this.angleInput.value)
    }

    /**
     * Get radius value
     */
    get radius() {
        return parseInt(this.radiusInput.value)
    }
}