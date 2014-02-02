/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};



//http://stackoverflow.com/questions/16544984/how-backbone-js-model-fetch-method-works



(function () {
    'use strict';

    nilText.Models.PostModel = Backbone.Model.extend({

        url: 'foo',
    //     content: String,
    // author: {type: mongoose.Schema.Types.ObjectId, index: true}

        initialize: function() {
            // this.url = nilText.config.baseUrl + '/' + id;
// console.log(this.url);
        },

        defaults: {
            content: '',
            author: ''
        },

        validate: function(attrs, options){
        },

        parse: function(response, options){
            return response;
        },

        findOne: function(){

        }

    });

})();
