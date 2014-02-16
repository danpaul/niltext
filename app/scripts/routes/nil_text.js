// posts.addPosts(['51f87bdbe1df9a6d11000002', '525f3132bab2553d05000001', '525f367075b3fcdb08000001']);

nilText.Routers = nilText.Routers || {};

(function () {
    'use strict';

    nilText.Routers.NilTextRouter = Backbone.Router.extend({

	    routes: {
	      '': 'index',
        'post/:id': 'post',
        'posts-test': 'postsTest',
        'post-node-test': 'postNodeTest',
	      'show/:id': 'show'
	    },

	    index: function(){
	      $('body').append('index route has been called');
	    },

      post: function(id){
        var post = new nilText.Models.PostModel({'id': id});
      },

      postNodeTest: function(){
        var posts = new nilText.Collections.PostCollection();
        var postNodes = new nilText.Collections.PostNodeCollection('foo');
        postNodes.postCollection = posts;

        postNodes.addPostNodes(['51fe872f04c18dfe12000004', '51fe87360c89100713000004', '51fe87cecc12c59c13000004'], function(err, record){
            if(err){console.log(err);
            }else{ console.log(record);}
        });


        postNodes.on("add", function(){
// console.log(postNodes.get(['51fe872f04c18dfe12000004']));
        });
      },

      postsTest: function(){

        var posts = new nilText.Collections.PostCollection();

        posts.on("add", function(){
          // console.log(posts.get('51f87bdbe1df9a6d11000002').get('author'));
        });

        posts.findPosts(['51f87bdbe1df9a6d11000002', '525f3132bab2553d05000001', '525f367075b3fcdb08000001'], function(err, records){
          if(err){
            console.log(err);
          }else{
            console.log(records);
          }
        })

        var posts = new nilText.Collections.PostCollection();

      },

	    show: function(id){
	      $(document.body).append('show route has been called with id: ' + id);
	    }

    });

})();