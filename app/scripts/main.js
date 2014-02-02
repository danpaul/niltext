/*global nilText, $*/


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
    // new nilText.Routers.NilTextRouter;
    // Backbone.history.start({pushState: true});
    // nilText.init();




    $.ajax({
            url: 'http://localhost:3000/api/post/51f87bdbe1df9a6d11000002',
            dataType: 'json',
            type: 'GET',
            success: function( data, textStatus, jqXHR ) {
console.log('success');
                // console.log( data );
                //console.dir( data );
                //console.log( textStatus );
                //console.dir( jqXHR );} });
            },
            error: function(jqXHR, textStatus, errorThrown ){ 

console.log(jqXHR);


             }
        });



});
