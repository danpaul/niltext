/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.PostNodeCollection = Backbone.Collection.extend({

        model: nilText.Models.PostNodeModel,
        postCollection: null,

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
                	var postIds = _.map(postNodes, function(postNode){return postNode.post});
                    that.storePosts(postNodes);
                    if( that.postCollection === null ){ throw('postCollection not defined'); }
                    that.postCollection.addPosts(postIds);
                    callback(null, that.getPosts(ids));
                });
            }else{
                callback(null, that.getPosts(ids));
            }
        },

        getPosts: function(idArray){
            var that = this;
            return _.map(idArray, function(id){ return that.get(id); })
        },

        //takes postNode data returned from the server and stores it in collection
        storePosts: function(postNodes){
            var that = this;
            _.each(postNodes, function(postNode){
                postNode.id = postNode._id;
                delete(postNode._id);
                var newPostNode = new nilText.Models.PostNodeModel(postNode);
                that.add(newPostNode);
            });
        },



    });

})();
