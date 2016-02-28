var Shokugeki = {};

Shokugeki.App = new Backbone.Marionette.Application();

Shokugeki.App.addRegions({
  mainRegion: "#content"
});

var Recipe = Backbone.Model.extend({});

var Recipes = Backbone.Collection.extend({
  model: Recipe,
  url: '/recipes.json'
});

var RecipeView = Backbone.Marionette.ItemView.extend({
  template: "#recipe-item-template",
  className: "row"
});

var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe"
  },

  events: {
    "click @ui.addButton": "addRecipe"
  },

  addRecipe: function(){
    console.log("hello");
  }
});

Shokugeki.App.addInitializer(function(options){
  var myRecipes = new Recipes();
  myRecipes.fetch();

  var MyRecipesView = new RecipesView({
    collection: myRecipes
  });
  Shokugeki.App.mainRegion.show(MyRecipesView);
});

$(document).ready(function(){
  Shokugeki.App.start({});
});
