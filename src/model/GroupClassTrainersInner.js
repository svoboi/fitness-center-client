/**
 * Fitness center backend API
 * backend API for Fitness center
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GroupClassTrainersInner model module.
 * @module model/GroupClassTrainersInner
 * @version 1.0.0
 */
class GroupClassTrainersInner {
    /**
     * Constructs a new <code>GroupClassTrainersInner</code>.
     * @alias module:model/GroupClassTrainersInner
     */
    constructor() { 
        
        GroupClassTrainersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupClassTrainersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupClassTrainersInner} obj Optional instance to populate.
     * @return {module:model/GroupClassTrainersInner} The populated <code>GroupClassTrainersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupClassTrainersInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupClassTrainersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupClassTrainersInner</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} id
 */
GroupClassTrainersInner.prototype['id'] = undefined;






export default GroupClassTrainersInner;
