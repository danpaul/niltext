/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.StoryCollection = Backbone.Collection.extend({
        model: nilText.Models.StoryModel
    });

})();
