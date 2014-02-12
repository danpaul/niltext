/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.PostCollection = Backbone.Collection.extend({

        model: nilText.Models.PostModel,

        addPosts: function(ids){

        	var that = this;

        	$.get(nilText.config.baseUrl + '/posts/', {
				'ids[]': _.map(ids, function(id){ if( that.get(id) == undefined ){ return id; }	})
        	}, 
        	function(data){
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
