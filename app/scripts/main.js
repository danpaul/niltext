window.nilText = {
    config:{
        'baseUrl': 'http://localhost:3000/api'
    },
    Models: {},
    Collections: {},
    Views: {},
    postCollection: null,
    Routers: {},
    init: function () {
        'use strict';
        this.postCollection = new this.Collections.PostCollection();
    }
};

$(document).ready(function () {
    'use strict';

    nilText.init();
    new nilText.Routers.NilTextRouter;
    Backbone.history.start({pushState: true});
});
