/*global nilText, Backbone*/

nilText.Models = nilText.Models || {};



//http://stackoverflow.com/questions/16544984/how-backbone-js-model-fetch-method-works



(function () {
    'use strict';

    nilText.Models.Post = Backbone.Model.extend({
        // url: '',
        urlRoot: '',

        initialize: function() {
            // this.url = nilText.config.baseUrl + '/post/' + this.id;
            // this.url = nilText.config.baseUrl + '/post';
console.log('init called');
this.urlRoot = nilText.config.baseUrl + '/post';

        },

        defaults: {
            id: '',
            content: '',
            author: ''
        },

        validate: function(attrs, options){
console.log('validate called');
        },

        parse: function(response, options){

alert('foo');
console.log('foo');
// console.log(response);
            return response;
        },

        findOne: function(){

        }

    });

})();
