/*global nilText, Backbone*/

nilText.Routers = nilText.Routers || {};

(function () {
    'use strict';

    nilText.Routers.NilTextRouter = Backbone.Router.extend({

	    routes: {
	      '': 'index',
        'foo': 'bar',
	      'show/:id': 'show'
	    },

      bar: function(){
        $('body').append('asdfasdfasdf');
      },

	    index: function(){
	      $('body').append('index route has been called');
	    },

	    show: function(id){
	      $(document.body).append('show route has been called with id: ' + id);
	    }

    });

})();



  // textNil.router = Backbone.Router.extend({
  //   routes: {
  //     '': 'index',
  //     'show/:id': 'show'
  //   },

  //   index: function(){
  //     $('#form').append('index route has been called');
  //   },

  //   show: function(id){
  //     $(document.body).append('show route has been called with id: ' + id);
  //   }

  // });
