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
        // window.nilText.Collections.PostNodeCollection.foo = 'bar';

    }
};

$(document).ready(function () {
    'use strict';
    new nilText.Routers.NilTextRouter;
    Backbone.history.start({pushState: true});
    nilText.init();
// console.log(nilText.Collections.PostNodeCollection);
    // nilText.Collections.PostNodeCollection.foo = 'bar';

});
