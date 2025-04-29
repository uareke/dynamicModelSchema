import { applyTypes } from '../plugins/apply-types.js';
import { BaseModel } from '../models/base-model.js';

export class VehicleModel{
    constructor() {

        this.brand = null;
        this.model = null;
        this.year = null;
        this.category = null;   

        this.schema = {
            brand: 'string',
            model: 'string',
            year: 'int',
            category: 'string'
        };
    }

    update(data) {
        applyTypes(data, this.schema, this);
    }
}