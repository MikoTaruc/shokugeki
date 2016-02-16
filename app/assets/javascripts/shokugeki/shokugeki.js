MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

var Recipe = Backbone.Model.extend({});

var Recipes = Backbone.Collection.extend({
  model: Recipe,
  url: '/recipes.json'
});

var RecipeView = Backbone.Marionette.ItemView.extend({
  template: "#recipe-item-template"
});

var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  template: "#recipe-list-template"
});

MyApp.addInitializer(function(options){
  var myRecipes = new Recipes();
  myRecipes.fetch();

  var MyRecipesView = new RecipesView({
    collection: myRecipes
  });
  MyApp.mainRegion.show(MyRecipesView);
});

$(document).ready(function(){
  MyApp.start({});
});
