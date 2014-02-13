window.nilText = {
    config:{
        'baseUrl': 'http://localhost:3000/api'
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

});
