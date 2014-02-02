/*global nilText, Backbone*/

nilText.Routers = nilText.Routers || {};

(function () {
    'use strict';

    nilText.Routers.NilTextRouter = Backbone.Router.extend({

	    routes: {
	      '': 'index',
        'post/:id': 'post',
	      'show/:id': 'show'
	    },

	    index: function(){
	      $('body').append('index route has been called');
	    },

      post: function(id){
        var post = new nilText.Models.Post({'id': id});
        post.fetch({
// dataType: 'text',
          // dataType: 'jsonp',
          success: function(post){
            console.log(post);
          },
          error: function(model, error){
console.log(error);
// console.log(error);
// console.log(error.toJSON());
          }
        });
      },

	    show: function(id){
	      $(document.body).append('show route has been called with id: ' + id);
	    }

    });

})();