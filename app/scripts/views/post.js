/*global nilText, Backbone, JST*/

nilText.Views = nilText.Views || {};

(function () {
    'use strict';

    nilText.Views.PostView = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs']

    });

})();
