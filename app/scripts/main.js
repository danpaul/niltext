/*global nilText, $*/


window.nilText = {
    config:{
        'baseUrl': 'http://localhost:3000'
    },
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
    }
};

$(document).ready(function () {
    'use strict';
    new nilText.Routers.NilTextRouter;
    Backbone.history.start({pushState: true});
    nilText.init();

    // var post = new nilText.Models.PostModel();
    // var postNode = new nilText.Models.PostNodeModel();
});
