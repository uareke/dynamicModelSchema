/**
 * @module autoForm
 * 
 * The `autoForm` module is responsible for initializing a form and managing events to update a data model. 
 * It allows binding form fields to properties of a model object, updating the model as the user interacts with the form fields.
 * 
 * @property {Object} fields - An object that stores references to the form fields.
 * 
 * @method initializeForm
 * 
 * Initializes the form and binds interaction events to the data model.
 * 
 * @param {Object} model - The model object whose properties will be bound to the form fields.
 * @param {Object} model.schema - An optional schema of the model, describing the properties and data types used in the form.
 * @param {function} model.applyProperty - An optional function used to apply changes to the model when a property is modified. If not provided, the property value is directly updated on the `model` object.
 * 
 * @example
 * const model = { name: '', email: '', schema: { name: 'string', email: 'string' } };
 * autoForm.initializeForm(model);
 * 
 * Imports
 */

export const autoForm = {
    fields: {},

    /**
     * Initializes the form and sets up input events for each field.
     * 
     * @param {Object} model - The model object that will be used to bind the form fields.
     */
    initializeForm: function (model) {
        this.model = model;
        this.addEvents(model);
    },

    /**
     * Adds interaction events to the form fields to update the model properties.
     * 
     * @param {Object} model - The model object whose properties are being bound to the form fields.
     * 
     * @throws {Error} If an error occurs while trying to associate events with the form fields.
     */
    addEvents: function (model) {
        try {
            for (let property in model.schema || model) {
                const field = document.getElementById(property);
                if (field) {
                    const updateModel = (value) => {
                        const entry = { [property]: value };
                        if (typeof model.applyProperty === 'function') {
                            model.applyProperty(property, value);
                        } else {
                            model[property] = value;
                        }
                    };

                    const tag = field.tagName.toLowerCase();

                    if (tag === 'input') {
                        if (['text', 'number', 'email', 'tel'].includes(field.type)) {
                            field.addEventListener('input', (event) => {
                                updateModel(event.target.value.trim());
                            });
                        } else if (field.type === 'checkbox') {
                            field.addEventListener('change', (event) => {
                                updateModel(event.target.checked);
                            });
                        } else if (field.type === 'radio') {
                            field.addEventListener('change', (event) => {
                                if (event.target.checked) {
                                    updateModel(event.target.value);
                                }
                            });
                        }
                    } else if (tag === 'select') {
                        $(field).on('change', () => {
                            updateModel($(field).val());
                        });
                    } else if (tag === 'textarea') {
                        field.addEventListener('input', (event) => {
                            updateModel(event.target.value.trim());
                        });
                    }

                    // Save the reference of the field
                    this.fields[property] = field;
                }
            }
        } catch (e) {
            console.error("Field not found", e);
        }
    },
};
