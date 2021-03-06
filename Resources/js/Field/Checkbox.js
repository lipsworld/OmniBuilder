/**
 * WordPress global variable
 * @type {Object}
 */
window.wp = window.wp || {};

/**
 * @param  {Object} exports WordPress global object `wp`
 * @param  {Object} $       jQuery object `jQuery`
 */
( function( exports, $ ) {

	/**
	 * Load OmniBuilder API
	 * @module OB
	 * @type {Object}
	 */
	var api = exports.OB || {};

	/**
	 * Checkbox Field model
	 * @class Field_Checkbox
	 * @extends {Field}
	 */
	api.Field_Checkbox = api.Field.extend( {
		/**
		 * Default options
		 * @memberOf Field_Checkbox
		 * @type {Object}
		 * @extends {Field.prototype.defaults}
		 */
		defaults: _.extend( {}, api.Field.prototype.defaults, {
			'type': 'checkbox'
		} ),
	} );

	/**
	 * Add Checkbox Field to OmniBuilder
	 */
	api.add( 'checkbox', {
		model: api.Field_Checkbox,
		view: api.Field_View
	} );

	/**
	 * Extend OmniBuilder API
	 */
	_.extend( exports.OB, api );

} ) ( wp, jQuery )