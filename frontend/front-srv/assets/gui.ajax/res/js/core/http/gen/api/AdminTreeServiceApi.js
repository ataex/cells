/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RestNodesCollection from '../model/RestNodesCollection';
import TreeListNodesRequest from '../model/TreeListNodesRequest';
import TreeReadNodeRequest from '../model/TreeReadNodeRequest';
import TreeReadNodeResponse from '../model/TreeReadNodeResponse';

/**
* AdminTreeService service.
* @module api/AdminTreeServiceApi
* @version 1.0
*/
export default class AdminTreeServiceApi {

    /**
    * Constructs a new AdminTreeServiceApi. 
    * @alias module:api/AdminTreeServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List files and folders starting at the root (first level lists the datasources)
     * @param {module:model/TreeListNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */
    listAdminTreeWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listAdminTree");
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
      let returnType = RestNodesCollection;

      return this.apiClient.callApi(
        '/tree/admin/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List files and folders starting at the root (first level lists the datasources)
     * @param {module:model/TreeListNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */
    listAdminTree(body) {
      return this.listAdminTreeWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read a node information inside the admin tree
     * @param {module:model/TreeReadNodeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeReadNodeResponse} and HTTP response
     */
    statAdminTreeWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling statAdminTree");
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
      let returnType = TreeReadNodeResponse;

      return this.apiClient.callApi(
        '/tree/admin/stat', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read a node information inside the admin tree
     * @param {module:model/TreeReadNodeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeReadNodeResponse}
     */
    statAdminTree(body) {
      return this.statAdminTreeWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
