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
import Room from '../model/Room';

/**
 * Room service.
 * @module api/RoomApi
 * @version 1.0.0
 */
export default class RoomApi {

    /**
     * Constructs a new RoomApi.
     * @alias module:api/RoomApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteRoom operation.
     * @callback module:api/RoomApi~deleteRoomCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete room by id
     * @param {Number} id ID of the room to delete
     * @param {module:api/RoomApi~deleteRoomCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRoom(id, callback) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteRoom");
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
            '/rooms/{id}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getRoom operation.
     * @callback module:api/RoomApi~getRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get room by id
     * @param {Number} id ID of the room to retrieve
     * @param {module:api/RoomApi~getRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    getRoom(id, callback) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getRoom");
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
        let returnType = Room;
        return this.apiClient.callApi(
            '/rooms/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getRooms operation.
     * @callback module:api/RoomApi~getRoomsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Room>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all rooms
     * @param {module:api/RoomApi~getRoomsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Room>}
     */
    getRooms(callback) {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Room];
        return this.apiClient.callApi(
            '/rooms', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the putRoom operation.
     * @callback module:api/RoomApi~putRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put room by id
     * @param {module:model/Room} room
     * @param {Number} id ID of the room to put
     * @param {module:api/RoomApi~putRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    putRoom(room, id, callback) {
        let postBody = room;
        // verify the required parameter 'room' is set
        if (room === undefined || room === null) {
            throw new Error("Missing the required parameter 'room' when calling putRoom");
        }
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling putRoom");
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
        let returnType = Room;
        return this.apiClient.callApi(
            '/rooms/{id}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the registerRoom operation.
     * @callback module:api/RoomApi~registerRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new room
     * @param {module:model/Room} room
     * @param {module:api/RoomApi~registerRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    registerRoom(room, callback) {
        let postBody = room;
        // verify the required parameter 'room' is set
        if (room === undefined || room === null) {
            throw new Error("Missing the required parameter 'room' when calling registerRoom");
        }

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Room;
        return this.apiClient.callApi(
            '/rooms', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }


}
