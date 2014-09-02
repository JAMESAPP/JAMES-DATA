/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'src/parser', 'text!package.json'], factory);
    } else {
        root.JAMES_DATA = factory(root.$, root.Parser, root.BowerJSON);
    }
}(this, function ($, _, Parser, PackageJSON) {
	'use strict';

	return {
		VERSION: JSON.parse(PackageJSON).version,
		Parser: Parser
	};
}));
