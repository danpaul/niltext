/*global nilText, $*/


window.nilText = {
    Config:{
        'textNilUrl': 'http://localhost:3000'
    },
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new nilText.Routers.NilTextRouter;
        Backbone.history.start({pushState: true});
    }
};

$(document).ready(function () {
    'use strict';
    nilText.init();
    var post = new nilText.Models.PostModel();
    var postNode = new nilText.Models.PostNodeModel();
});
