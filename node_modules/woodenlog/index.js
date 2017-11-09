/**
 * WoodenLog
 * Copyright 2016 Eli Elrom, All Rights Reserved.
 * Code licensed under the MIT License:
 * @author Eli Elrom
 */

const style = require('ansi-styles');

var logFunction = console.log,
	logColor = 'green',
	warnColor = 'yellow',
	errorColor = 'red';

var logMessage = function(object, color) {
	logFunction(style[color].open + object + style[color].close);
}

module.exports = {

	/**
	 * log message
	 *
	 * @param {Object} object
	 */
	log: function(object) {
		logMessage(object, logColor);
		return true;
	},

	/**
	 * warn message
	 *
	 * @param {Object} object
	 */
	warn: function(object) {
		logMessage(object, warnColor);
		return true;
	},

	/**
	 *
	 * error message
	 *
	 * @param {Object} object
	 */
	error: function(object) {
		logMessage(object, errorColor);
		return true;
	},

	/**
	 * configurate
	 *
	 * @param {Object} logOutFunction
	 * @param {String} logColorName
	 * @param {String} warnColorName
	 * @param {String} errorColorName
	 *
	 */
	configurate: function(logOutFunction, logColorName, warnColorName, errorColorName) {
		if (logOutFunction) logFunction = logOutFunction;
		logColor = logColorName;
		warnColor = warnColorName;
		errorColor = errorColorName;
		return true;
	}
};