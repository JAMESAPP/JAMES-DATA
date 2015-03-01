/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
    } else {
        root.PARSER = factory(root.$);
    }
}(this, function ($, _) {
	'use strict';

	return {
		extend: function(args) {
			if (args.key == undefined)
				throw new Error('Must define key!!');

			return _.extend({}, this, args);
		}

		, getMonths: function() {
			return [
				{label: 'January', value: 0}
				, {label: 'February', value: 1}
				, {label: 'March', value: 2}
				, {label: 'April', value: 3}
				, {label: 'May', value: 4}
				, {label: 'June', value: 5}
				, {label: 'July', value: 6}
				, {label: 'August', value: 7}
				, {label: 'September', value: 8}
				, {label: 'October', value: 9}
				, {label: 'November', value: 10}
				, {label: 'December', value: 11}
			];
		}
	};
}));
