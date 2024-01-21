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


import ApiClient from "../ApiClient";
import GroupClass from '../model/GroupClass';

/**
 * GroupClass service.
 * @module api/GroupClassApi
 * @version 1.0.0
 */
export default class GroupClassApi {

    /**
     * Constructs a new GroupClassApi.
     * @alias module:api/GroupClassApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTrainer operation.
     * @callback module:api/GroupClassApi~addTrainerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new trainer to group class
     * @param {module:model/AddTrainerRequest} addTrainerRequest
     * @param {Number} classId ID of the class to add trainer to
     * @param {module:api/GroupClassApi~addTrainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupClass}
     */
    addTrainer(addTrainerRequest, classId, callback) {
        let postBody = addTrainerRequest;
        // verify the required parameter 'addTrainerRequest' is set
        if (addTrainerRequest === undefined || addTrainerRequest === null) {
            throw new Error("Missing the required parameter 'addTrainerRequest' when calling addTrainer");
        }
        // verify the required parameter 'classId' is set
        if (classId === undefined || classId === null) {
            throw new Error("Missing the required parameter 'classId' when calling addTrainer");
        }

        let pathParams = {
            'classId': classId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = GroupClass;
        return this.apiClient.callApi(
            '/groupClasses/{classId}/trainers', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the deleteGroupClass operation.
     * @callback module:api/GroupClassApi~deleteGroupClassCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete class by id
     * @param {Number} id ID of the class to delete
     * @param {module:api/GroupClassApi~deleteGroupClassCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGroupClass(id, callback) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteGroupClass");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;
        return this.apiClient.callApi(
            '/groupClasses/{id}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getGroupClass operation.
     * @callback module:api/GroupClassApi~getGroupClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get class by id
     * @param {Number} id ID of the class to retrieve
     * @param {module:api/GroupClassApi~getGroupClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupClass}
     */
    getGroupClass(id, callback) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getGroupClass");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = GroupClass;
        return this.apiClient.callApi(
            '/groupClasses/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getGroupClasses operation.
     * @callback module:api/GroupClassApi~getGroupClassesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GroupClass>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all classes
     * @param {module:api/GroupClassApi~getGroupClassesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GroupClass>}
     */
    getGroupClasses(callback) {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [GroupClass];
        return this.apiClient.callApi(
            '/groupClasses', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the putGroupClass operation.
     * @callback module:api/GroupClassApi~putGroupClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put group class by id
     * @param {module:model/GroupClass} groupClass
     * @param {Number} id ID of the group class to put
     * @param {module:api/GroupClassApi~putGroupClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupClass}
     */
    putGroupClass(groupClass, id, callback) {
        let postBody = groupClass;
        // verify the required parameter 'groupClass' is set
        if (groupClass === undefined || groupClass === null) {
            throw new Error("Missing the required parameter 'groupClass' when calling putGroupClass");
        }
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling putGroupClass");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = GroupClass;
        return this.apiClient.callApi(
            '/groupClasses/{id}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the registerGroupClass operation.
     * @callback module:api/GroupClassApi~registerGroupClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new class
     * @param {any} groupClass
     * @param {module:api/GroupClassApi~registerGroupClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupClass}
     */
    registerGroupClass(groupClass, callback) {
        let postBody = groupClass;
        // verify the required parameter 'groupClass' is set
        if (groupClass === undefined || groupClass === null) {
            throw new Error("Missing the required parameter 'groupClass' when calling registerGroupClass");
        }

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = GroupClass;
        return this.apiClient.callApi(
            '/groupClasses', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getTrainers operation.
     * @callback module:api/GroupClassApi~getTrainersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trainers for group class
     * @param {Number} classId ID of the class to get trainers for
     * @param {module:api/GroupClassApi~getTrainersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */
    getTrainers(classId, callback) {
        let postBody = null;
        // verify the required parameter 'classId' is set
        if (classId === undefined || classId === null) {
            throw new Error("Missing the required parameter 'classId' when calling getTrainers");
        }

        let pathParams = {
            'classId': classId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = ['String'];
        return this.apiClient.callApi(
            '/groupClasses/{classId}/trainers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the removeTrainer operation.
     * @callback module:api/GroupClassApi~removeTrainerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove trainer from group class
     * @param {module:model/AddTrainerRequest} addTrainerRequest
     * @param {Number} classId ID of the class to remove trainer from
     * @param {module:api/GroupClassApi~removeTrainerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeTrainer(addTrainerRequest, classId, callback) {
        let postBody = addTrainerRequest;
        // verify the required parameter 'addTrainerRequest' is set
        if (addTrainerRequest === undefined || addTrainerRequest === null) {
            throw new Error("Missing the required parameter 'addTrainerRequest' when calling removeTrainer");
        }
        // verify the required parameter 'classId' is set
        if (classId === undefined || classId === null) {
            throw new Error("Missing the required parameter 'classId' when calling removeTrainer");
        }

        let pathParams = {
            'classId': classId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = [];
        let returnType = null;
        return this.apiClient.callApi(
            '/groupClasses/{classId}/trainers', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }


}
