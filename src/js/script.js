/**
 * IMPORTS
 */
import { autoForm } from '../plugins/auto-form.js';

import { VehicleModel } from '../models/vehicle-model.js';

/**
 * Main IIFE (Immediately Invoked Function Expression) to initialize the page functionality.
 * This function initializes the components, events, and handles user interactions on the page.
 * 
 * @function
 */
(function () {

    let Vehicle = new VehicleModel();

    /**
     * INDEX Object
     * Manages the initialization and event handling for the page.
     * @namespace Index
     */
    const Index = {

        /**
         * Initializes the page by setting up components and events.
         * This is called when the DOM content is loaded.
         * 
         * @function
         */
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
                this.initializeEvents();
            });

            //start autoform fields
            autoForm.initializeForm(Vehicle); 

        },

        /**
         * Initializes page components.
         * Currently empty, can be used for further setup.
         * 
         * @function
         */
        initializeComponents() {

        },

        /**
         * Initializes the events on the page.
         * It binds event listeners to handle user interactions such as clicks.
         * 
         * @function
         */
        initializeEvents() {
            // Start button events
            document.addEventListener('click', this.handleClickEvents.bind(this));
        },

        /**
         * Handles click events on the page.
         * It looks for specific elements (buttons) and invokes corresponding methods.
         * 
         * @param {Event} event - The click event triggered by the user.
         * @returns {void}
         * @function
         */
        handleClickEvents(event) {
            if (!event.target) return;

            const actions = {
                // Maps the button ID to the save function
                
                'btn-submit-data': this.SubmitDate,
            };

            if (actions[event.target.id]) {
                event.preventDefault(); // Prevents the default action for the buttons in the list
                actions[event.target.id].call(this);
            }
        },

        /**
         * Save method to handle the saving process.
         * This is where the logic for saving data would be implemented.
         * Currently, it is a placeholder.
         * 
         * @function
         */
        SubmitDate() {
            // Implement saving logic here
            console.log(Vehicle);
        },

    };

/**
 * Initializes the components and page functionality.
 * It calls `Index.init()` to initialize the page and `checkAndShowMessage()` to display any messages.
 * If any error occurs during the initialization, it will be caught and handled.
 * 
 * @function
 */
function initialize() {
    try {
        // Initializes the Index components and shows any necessary messages
        Index.init();
    } catch (error) {
        // Error handling (currently empty, can be extended to log the error or notify the user)
        console.error(`Error: ${error}`);
    }

}

    /**
     * The first function to be executed when the file is loaded.
     * It kicks off the initialization process.
     * 
     * @function
     */
    initialize();

})();
