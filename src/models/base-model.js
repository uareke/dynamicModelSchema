import { applyTypes } from '../plugins/apply-types.js';
export class BaseModel {
    constructor() {
        this.Id = null;
        this.DateCreate = null;
        this.DateUpdate = null;
        this.IsDeleted = false;
        this.IsActive = null;
        this.CreateBy = null;
        this.UpdateBy = null;
        this.Page = null;
        this.PageSize = null;
        this.OrderBy = null;

        this.schema = {
            Id: 'number',
            DateCreate: 'datetime',
            DateUpdate: 'datetime',
            IsDeleted: 'boolean',
            IsActive: 'boolean',
            CreateBy: 'number',
            UpdateBy: 'number',
            Page: 'number',
            PageSize: 'number',
            OrderBy: 'string',
        };
    }


    update(data) {
        applyTypes(data, this.schema, this);
        this.convertToBooleanFields();
    }

    applyProperty(key, value) {
        applyTypes({ [key]: value }, this.schema, this);
        this.convertToBooleanFields(); 
    }


    convertToBooleanFields() {
        if (this.IsActive !== null && this.IsActive !== undefined) {
            this.IsActive = !!this.IsActive; 
        }

        if (this.IsDeleted !== null && this.IsDeleted !== undefined) {
            this.IsDeleted = !!this.IsDeleted; 
        }
    }
}




