/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};

(function () {
    'use strict';

    nilText.Models.PostNodeModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
// console.log('post node created')
        },

        defaults: {
            story: null,
            parent: null,
            post: null,
            depth: null
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
