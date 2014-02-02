/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.PostCollection = Backbone.Collection.extend({

        model: nilText.Models.PostModel,

        addPosts: function(ids){


// need to check if posts with id is in collection yet


			var that = this;
        	$.get(nilText.config.baseUrl + '/posts/', {
        		'ids[]': ids
        	}
        	, function(data){
        		_.each(data, function(post){
        			post.id = post._id;
        			delete(post._id);
        			var newPost = new nilText.Models.PostModel(post);
        			that.add(newPost);

        		});
        	});
        }
    });

})();
