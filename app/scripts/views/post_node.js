/*global nilText, Backbone, JST*/

nilText.Views = nilText.Views || {};

(function () {
    'use strict';

    nilText.Views.PostNodeView = Backbone.View.extend({
    	el: $('#story-anchor'),

    	// tagName: 'li',

        template: JST['app/scripts/templates/post_node.ejs'],

        render: function(){
        	// $(this.el).append("hello world");
// console.log(this.model.getJSON());
// $(this.el).append(this.template(this.model.toJSON()));
this.$el.html(this.template(this.model.getJSON()));
        }
    });

})();
