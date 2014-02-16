/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};

(function () {
    'use strict';

    nilText.Models.StoryModel = Backbone.Model.extend({

        urlRoot: nilText.config.baseUrl + '/story/find-by-id',
        postNodeCollection: null,

        initialize: function() {
            this.postNodeCollection = new nilText.Collections.PostNodeCollection();
        },

        defaults: {
            id: null,
            author: null,
            root: null,
            // postNodeCollection: null
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            delete(response._id);
            return response;
        },

        create: function(postNodeId, callback){
            var that = this;
            this.fetch({
              success: function(){
                that.postNodeCollection.addPostNodes([postNodeId], function(){
                    callback(that);
                });
              },
              error: function(){ throw 'Unable to fetch Story.'; }
            });
        }
    });
})();
