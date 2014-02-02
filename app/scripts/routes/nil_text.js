/*global nilText, Backbone*/

nilText.Routers = nilText.Routers || {};

(function () {
    'use strict';

    nilText.Routers.NilTextRouter = Backbone.Router.extend({

	    routes: {
	      '': 'index',
        'post/:id': 'post',
        // 'post-find-one': 'postFindOne',
        // 'post-find-one': 'postFindOne',
	      'show/:id': 'show'
	    },

	    index: function(){
	      $('body').append('index route has been called');
	    },

      post: function(id){
// console.log(id);
        var post = new nilText.Models.PostModel(id);
      },

      postFindOne: function(){
        var post = new nilText.Models.PostModel();

console.log(post);

// $(document.body).append('find one');
// console.log('foo');

      },

	    show: function(id){
	      $(document.body).append('show route has been called with id: ' + id);
	    }

    });

})();