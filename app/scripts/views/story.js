/*global nilText, Backbone, JST*/

nilText.Views = nilText.Views || {};

(function () {
    'use strict';

    nilText.Views.StoryView = Backbone.View.extend({

        template: JST['app/scripts/templates/story.ejs']

    });

})();
