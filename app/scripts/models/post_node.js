/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};

(function () {
    'use strict';

    nilText.Models.PostNodeModel = Backbone.Model.extend({

        url: '',
        postCollection: null,

        initialize: function() {
            this.postCollection = nilText.postCollection;
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
        },

        getPost: function(){
            return this.postCollection.get(this.get('post'));
        },

        getPostContent: function(){
            return this.getPost().get('content');
        },

        getJSON: function(){
            var data = this.toJSON();
            data.postData = this.getPost().toJSON();
            return data;
        }
    });
})();