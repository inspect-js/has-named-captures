'use strict';

/** @type {import('.')} */
module.exports = function hasNamedCaptures() {
	try {
		return !!new RegExp('(?<x>.)');
	} catch (e) {
		return false;
	}
};
