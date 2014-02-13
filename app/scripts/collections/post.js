/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.PostCollection = Backbone.Collection.extend({

        model: nilText.Models.PostModel,

        //checks if posts exist in collection, if not, adds them
        //returns all posts on success
        addPosts: function(ids, callback){
        	var that = this;
            var unstoredIds = _.filter(ids, function(id){ return that.get(id) == undefined });
            if( !_.isEmpty(unstoredIds) ){
                $.ajax({
                    method: 'get',
                    url: nilText.config.baseUrl + '/posts/',
                    data: {'ids[]': unstoredIds}
                }).error(function(jqXHR, status, error){ callback(error, null); }
                ).success(function(data){
                    that.storePosts(data);
                    callback(null, that.getPosts(ids));
                });
            }else{
                callback(null, that.getPosts(ids));
            }
        },

        //takes array of post ids that are in collection
        //returns an array of those posts
        getPosts: function(idArray){
            var that = this;
            return _.map(idArray, function(id){ return that.get(id); })
        },

        //takes post data returned from teh server and stores it in collection
        storePosts: function(posts){
            var that = this;
            _.each(posts, function(post){
                post.id = post._id;
                delete(post._id);
                var newPost = new nilText.Models.PostModel(post);
                that.add(newPost);
            });
        },

        findPosts: function(idArray, callback){
            this.addPosts(idArray, callback);
        }
    });
})();
