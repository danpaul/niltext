/*global nilText, Backbone*/

nilText.Collections = nilText.Collections || {};

(function () {
    'use strict';

    nilText.Collections.StoryCollection = Backbone.Collection.extend({
        model: nilText.Models.StoryModel,

        //adds if story doesn't exist else then passes new story to callback
        //else passes existing story to callback
        addStory: function(id, callback){
        	var that = this;
            if( this.get(id) === undefined ){
            	var story = new nilText.Models.StoryModel({id: id});
            	this.add(story);
            	story.instantiate(callback);
            }else{
            	callback(this.get(story));
            }
        },

        findStory: function(id, callback){
        	this.addStory(id, callback);
        }
    });

})();