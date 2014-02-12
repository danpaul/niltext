/*global nilText, Backbone*/

// 51f87bdbe1df9a6d11000002
// posts.addPosts(['51f87bdbe1df9a6d11000002', '525f3132bab2553d05000001', '525f367075b3fcdb08000001']);

nilText.Routers = nilText.Routers || {};

(function () {
    'use strict';

    nilText.Routers.NilTextRouter = Backbone.Router.extend({

	    routes: {
	      '': 'index',
        'post/:id': 'post',
        'posts-test': 'postsTest',
	      'show/:id': 'show'
	    },

	    index: function(){
	      $('body').append('index route has been called');
	    },

      post: function(id){
        var post = new nilText.Models.PostModel({'id': id});
      },

      postsTest: function(){
        var posts = new nilText.Collections.PostCollection();

        posts.on("add", function(){
          console.log(posts);
        });

        posts.addPosts(['51f87bdbe1df9a6d11000002', '525f3132bab2553d05000001', '525f367075b3fcdb08000001']);

      },

	    show: function(id){
	      $(document.body).append('show route has been called with id: ' + id);
	    }

    });

})();