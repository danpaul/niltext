/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};



//http://stackoverflow.com/questions/16544984/how-backbone-js-model-fetch-method-works



(function () {
    'use strict';

    nilText.Models.PostModel = Backbone.Model.extend({

        initialize: function() { },

        defaults: { id: '', content: '', author: '' },

        validate: function(attrs, options){

        },

        parse: function(response, options){
            response.id = response._id;
            return response;
        },

        findOne: function(){

        }

    });

})();
