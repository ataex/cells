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


import ApiClient from '../ApiClient';
import TreeGeoQuery from './TreeGeoQuery';
import TreeNodeType from './TreeNodeType';





/**
* The TreeQuery model module.
* @module model/TreeQuery
* @version 1.0
*/
export default class TreeQuery {
    /**
    * Constructs a new <code>TreeQuery</code>.
    * @alias module:model/TreeQuery
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TreeQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TreeQuery} obj Optional instance to populate.
    * @return {module:model/TreeQuery} The populated <code>TreeQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeQuery();

            
            
            

            if (data.hasOwnProperty('PresetPaths')) {
                obj['PresetPaths'] = ApiClient.convertToType(data['PresetPaths'], ['String']);
            }
            if (data.hasOwnProperty('PathPrefix')) {
                obj['PathPrefix'] = ApiClient.convertToType(data['PathPrefix'], ['String']);
            }
            if (data.hasOwnProperty('MinSize')) {
                obj['MinSize'] = ApiClient.convertToType(data['MinSize'], 'String');
            }
            if (data.hasOwnProperty('MaxSize')) {
                obj['MaxSize'] = ApiClient.convertToType(data['MaxSize'], 'String');
            }
            if (data.hasOwnProperty('MinDate')) {
                obj['MinDate'] = ApiClient.convertToType(data['MinDate'], 'String');
            }
            if (data.hasOwnProperty('MaxDate')) {
                obj['MaxDate'] = ApiClient.convertToType(data['MaxDate'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = TreeNodeType.constructFromObject(data['Type']);
            }
            if (data.hasOwnProperty('FileName')) {
                obj['FileName'] = ApiClient.convertToType(data['FileName'], 'String');
            }
            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
            }
            if (data.hasOwnProperty('FreeString')) {
                obj['FreeString'] = ApiClient.convertToType(data['FreeString'], 'String');
            }
            if (data.hasOwnProperty('Extension')) {
                obj['Extension'] = ApiClient.convertToType(data['Extension'], 'String');
            }
            if (data.hasOwnProperty('GeoQuery')) {
                obj['GeoQuery'] = TreeGeoQuery.constructFromObject(data['GeoQuery']);
            }
            if (data.hasOwnProperty('PathDepth')) {
                obj['PathDepth'] = ApiClient.convertToType(data['PathDepth'], 'Number');
            }
            if (data.hasOwnProperty('Not')) {
                obj['Not'] = ApiClient.convertToType(data['Not'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} PresetPaths
    */
    PresetPaths = undefined;
    /**
    * @member {Array.<String>} PathPrefix
    */
    PathPrefix = undefined;
    /**
    * @member {String} MinSize
    */
    MinSize = undefined;
    /**
    * @member {String} MaxSize
    */
    MaxSize = undefined;
    /**
    * @member {String} MinDate
    */
    MinDate = undefined;
    /**
    * @member {String} MaxDate
    */
    MaxDate = undefined;
    /**
    * @member {module:model/TreeNodeType} Type
    */
    Type = undefined;
    /**
    * @member {String} FileName
    */
    FileName = undefined;
    /**
    * @member {String} Content
    */
    Content = undefined;
    /**
    * @member {String} FreeString
    */
    FreeString = undefined;
    /**
    * @member {String} Extension
    */
    Extension = undefined;
    /**
    * @member {module:model/TreeGeoQuery} GeoQuery
    */
    GeoQuery = undefined;
    /**
    * @member {Number} PathDepth
    */
    PathDepth = undefined;
    /**
    * @member {Boolean} Not
    */
    Not = undefined;








}


