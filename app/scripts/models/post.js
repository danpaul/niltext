/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};

(function () {
    'use strict';

    nilText.Models.PostModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
console.log('post created');
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
