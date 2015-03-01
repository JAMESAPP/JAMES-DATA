/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'text!data/chartOfAccounts.json'], factory);
    } else {
        root.FINANCIAL = factory(root.$, root._, root.ChartOfAccountsData);
    }
}(this, function ($, _, ChartOfAccountsData) {
	'use strict';

	return {
		extend: function(args) {
			return _.extend({}, this, args);
		}

		, getChartOfAccounts: function() {
			return JSON.parse(ChartOfAccountsData);
		}
	};
}));
