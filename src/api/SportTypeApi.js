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


import ApiClient from "../ApiClient.js";
import SportType from '../model/SportType.js';

/**
* SportType service.
* @module api/SportTypeApi
* @version 1.0.0
*/
export default class SportTypeApi {

    /**
    * Constructs a new SportTypeApi. 
    * @alias module:api/SportTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteSportType operation.
     * @callback module:api/SportTypeApi~deleteSportTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete sport type by id
     * @param {Number} id ID of the sport type to delete
     * @param {module:api/SportTypeApi~deleteSportTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSportType(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSportType");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/sportTypes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSportType operation.
     * @callback module:api/SportTypeApi~getSportTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SportType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sport type by id
     * @param {Number} id ID of the sport type to retrieve
     * @param {module:api/SportTypeApi~getSportTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SportType}
     */
    getSportType(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSportType");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SportType;
      return this.apiClient.callApi(
        '/sportTypes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSportTypes operation.
     * @callback module:api/SportTypeApi~getSportTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SportType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all sport types
     * @param {module:api/SportTypeApi~getSportTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SportType>}
     */
    getSportTypes(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SportType];
      return this.apiClient.callApi(
        '/sportTypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putSportType operation.
     * @callback module:api/SportTypeApi~putSportTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SportType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put sport type by id
     * @param {module:model/SportType} sportType 
     * @param {Number} id ID of the sport type to put
     * @param {module:api/SportTypeApi~putSportTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SportType}
     */
    putSportType(sportType, id, callback) {
      let postBody = sportType;
      // verify the required parameter 'sportType' is set
      if (sportType === undefined || sportType === null) {
        throw new Error("Missing the required parameter 'sportType' when calling putSportType");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putSportType");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SportType;
      return this.apiClient.callApi(
        '/sportTypes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerSportType operation.
     * @callback module:api/SportTypeApi~registerSportTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SportType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new sport type
     * @param {module:model/SportType} sportType 
     * @param {module:api/SportTypeApi~registerSportTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SportType}
     */
    registerSportType(sportType, callback) {
      let postBody = sportType;
      // verify the required parameter 'sportType' is set
      if (sportType === undefined || sportType === null) {
        throw new Error("Missing the required parameter 'sportType' when calling registerSportType");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SportType;
      return this.apiClient.callApi(
        '/sportTypes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
