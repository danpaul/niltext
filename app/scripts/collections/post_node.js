/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.PostNodeCollection = Backbone.Collection.extend({

        model: nilText.Models.PostNodeModel,
        postCollection: null,

        //each element contains {id, child, depth}
        treeTable: [],

        initialize: function(){
        	this.postCollection = nilText.postCollection;
        },

        addPostNodes: function(ids, callback){
        	var that = this;
            var unstoredIds = _.filter(ids, function(id){ return that.get(id) == undefined });
            if( !_.isEmpty(unstoredIds) ){
                $.ajax({
                    method: 'get',
                    url: nilText.config.baseUrl + '/post-nodes/',
                    data: {'ids[]': unstoredIds}
                }).error(function(jqXHR, status, error){ throw(error); }
                ).success(function(postNodes){
                	// var postIds = _.map(postNodes, function(postNode){return postNode.post});
                    that.storePosts(postNodes, callback);
                    // if( that.postCollection === null ){ throw('postCollection not defined'); }
                    // that.postCollection.addPosts(postIds, function(){
                    // 	if(callback){ callback(that.getPosts(ids)); }
                    // });
                });
            }else{
            	that.getPosts(ids, callback);
            }
        },

        addPostNodesFromRequest: function(postNodes){

        },

        getPosts: function(idArray){
            var that = this;
            return _.map(idArray, function(id){ return that.get(id); })
        },

        getPostNodeChildren: function(id, callback){
        	var isInTable = false;
        	var children = [];
        	_.each(this.treeTable, function(element){
        		if( element.id === id ){
        			isInTable = true;
        			if( element.child !== null ){
        				children.push(element.child);
        			}
        		}
        	});

        	if( isInTable ){
        		callback(children)
        	}else{
        		this.requestPostNodeChildren(id, callback);
        	}
        },

        requestPostNodeChildren: function(id, callback){
        	var that = this;
            $.ajax({
                method: 'get',
                url: nilText.config.baseUrl + '/post-node-children/' + id,
            }).error(function(jqXHR, status, error){ throw(error); }
            ).success(function(children){ that.storePosts(children, callback); });
        },

        //takes postNode data returned from the server and stores it in collection
        //stores and retrieves post IDS
        //calls callback passing it the postNodes
        storePosts: function(postNodes, callback){

			var that = this;
			var postIds = _.map(postNodes, function(postNode){return postNode.post});
			var postNodeModels = [];

			_.each(postNodes, function(postNode){
			    postNode.id = postNode._id;
			    delete(postNode._id);
			    var newPostNode = new nilText.Models.PostNodeModel(postNode);
			    postNodeModels.push(newPostNode);
			    that.add(newPostNode);
			});

			that.postCollection.addPosts(postIds, function(){
				if(callback){ callback(postNodeModels); }
			});

            // var that = this;
            // _.each(postNodes, function(postNode){
            //     postNode.id = postNode._id;
            //     delete(postNode._id);
            //     var newPostNode = new nilText.Models.PostNodeModel(postNode);
            //     that.add(newPostNode);
            // });
        },



    });

})();
