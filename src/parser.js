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
	};
}));
