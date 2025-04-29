import { applyTypes } from '../plugins/apply-types.js';
import { BaseModel } from '../models/base-model.js';

export class VehicleModel extends BaseModel {
    constructor() {
        super();

        this.brand = null;
        this.model = null;
        this.year = null;
        this.category = null;   

        this.schema = {
            ...this.schema, 
            brand: 'string',
            model: 'string',
            year: 'string',
            category: 'string'
        };
    }

    update(data) {
        applyTypes(data, this.schema, this);
    }
}