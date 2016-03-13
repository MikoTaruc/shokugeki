var Shokugeki = {};

Shokugeki.App = new Backbone.Marionette.Application();

Shokugeki.App.addRegions({
  mainRegion: "#content"
});

var Recipe = Backbone.Model.extend({
  url: '/recipes.json'
});

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
    var recipe = new Recipe({
      directions: "Set fire to your pants",
      ingredients: "pants and fire",
      name: "Burnt Pants"
    });
    recipe.save();
    Shokugeki.myRecipes.fetch();
  }
});

Shokugeki.App.addInitializer(function(options){
  Shokugeki.myRecipes = new Recipes();
  Shokugeki.myRecipes.fetch();

  var MyRecipesView = new RecipesView({
    collection: Shokugeki.myRecipes
  });
  Shokugeki.App.mainRegion.show(MyRecipesView);
});

$(document).ready(function(){
  Shokugeki.App.start({});
});
