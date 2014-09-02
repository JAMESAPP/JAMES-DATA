/*jslint nomen: true */
/*global define */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
		define(['jquery', 'underscore', 'text!data/mealTypes.json', 'text!data/foodGroups.json'], factory);
    } else {
        root.FOOD = factory(root.$, root._, root.MealTypesData, root.FoodGroupsData);
    }
}(this, function ($, _, MealTypesData, FoodGroupsData) {
	'use strict';

	return {
		extend: function(args) {
			return _.extend({}, this, args);
		}

		, getMealTypes: function() {
			return JSON.parse(MealTypesData);
		}

		, getFoodGroups: function() {
			return JSON.parse(FoodGroupsData);
		}
	};
}));
