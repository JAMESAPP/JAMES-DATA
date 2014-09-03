/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'text!data/machines.json'], factory);
    } else {
        root.TIMESHEET = factory(root.$, root._, root.MachinesData);
    }
}(this, function ($, _, MachinesData) {
	'use strict';

	return {
		extend: function(args) {
			return _.extend({}, this, args);
		}

		, getMachines: function() {
			return JSON.parse(MachinesData);
		}
	};
}));
