/**
 * Applies types to the properties of a target object based on a schema.
 * This function converts the values of the `data` object to the specified types 
 * in the `schema` and assigns them to the corresponding properties of the `target` object.
 * 
 * @function applyTypes
 * @param {Object} data - The source data object containing properties to be type-cast.
 * @param {Object} schema - The schema object defining the expected types for each property in `data`.
 * @param {Object} target - The target object where the type-cast values will be assigned.
 * 
 * @description 
 * The function checks each property in the `data` object:
 * - If the property exists in the `schema`, it attempts to cast the value in `data` to the type defined in the `schema`.
 * - The types can be `'string'`, `'number'`, `'boolean'`, `'datetime'`, or `'any'`.
 * - If the value is `null` or `undefined`, the target property is set to `null`.
 * - In the case of invalid values (e.g., a non-date string for the `'datetime'` type), the property will be set to `null`.
 * - If an unrecognized type is provided in the `schema`, a warning will be logged and the original value will be assigned.
 * 
 * @example
 * const data = {
 *     name: 'John Doe',
 *     age: '30',
 *     isActive: 'true',
 *     birthDate: '1990-01-01T00:00:00Z'
 * };
 * const schema = {
 *     name: 'string',
 *     age: 'number',
 *     isActive: 'boolean',
 *     birthDate: 'datetime'
 * };
 * const target = {};
 * applyTypes(data, schema, target);
 * 
 * console.log(target);
 * // { name: 'John Doe', age: 30, isActive: true, birthDate: 1990-01-01T00:00:00.000Z }
 */
export function applyTypes(data, schema, target) {
    if (!data || typeof data !== 'object' || !schema || !target) return;

    for (const key in data) {
        if (!schema.hasOwnProperty(key)) continue;

        const type = schema[key];
        const value = data[key];

        if (value === null || value === undefined) {
            target[key] = null;
            continue;
        }

        switch (type) {
            case 'string':
                target[key] = String(value);
                break;
            case 'number':
                target[key] = isNaN(value) ? null : parseFloat(value);
                break;
            case 'boolean':
                target[key] = value === 'true' || value === true || value === '1' || value === 1;
                break;
            case 'datetime':
                const parsedDate = new Date(value);
                target[key] = isNaN(parsedDate.getTime()) ? null : parsedDate;
                break;
            case 'any':
                target[key] = value;
                break;
            default:
                console.warn(`Unrecognized type: ${type}`);
                target[key] = value;
        }
    }
}
