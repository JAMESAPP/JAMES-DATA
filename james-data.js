/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'src/parser', 'src/food', 'src/financial', 'text!package.json'], factory);
    } else {
        root.JAMES_DATA = factory(root.$, root._, root.PARSER, root.FOOD, root.FINANCIAL, root.BowerJSON);
    }
}(this, function ($, _, Parser, Food, Financial, PackageJSON) {
	'use strict';

	return {
		VERSION: JSON.parse(PackageJSON).version,
		Parser: Parser,
		Food: Food,
		Financial: Financial
	};
}));
