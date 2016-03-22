var Shokugeki = {};

Shokugeki.App = new Backbone.Marionette.Application();

Shokugeki.App.addRegions({
//   mainRegion: "#content",
  appRegion: "#mikotest"
});

var RecipeLayoutView = Marionette.LayoutView.extend({
  template: "#layout-recipe-template",
  regions: {
    mainRegion: "#content",
    modalRegion: "#modals"
  }
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
    "addButton": "#add-recipe",
    "riasButton": "#rias-button"
  },

  events: {
    "click @ui.addButton": "addRecipe",
    "click @ui.riasButton": "riasFunction"
  },

  addRecipe: function(){
    var recipe = new Recipe({
      directions: "Set fire to your pants",
      ingredients: "pants and fire",
      name: "Burnt Pants"
    });
    recipe.save();
    Shokugeki.myRecipes.fetch();
  },

  riasFunction: function(){
    $('.cookbook-label h3').text("MIKO LOVES RIA");
  }
});

var NewRecipeModal = Backbone.Marionette.ItemView.extend({
  template: "#recipe-add-modal"
});

Shokugeki.App.addInitializer(function(options){
  Shokugeki.myRecipes = new Recipes();
  Shokugeki.myRecipes.fetch();

  var MyRecipesView = new RecipesView({
    collection: Shokugeki.myRecipes
  });

  var recipeLayoutView = new RecipeLayoutView();
  Shokugeki.App.appRegion.show(recipeLayoutView);
  recipeLayoutView.getRegion('mainRegion').show(MyRecipesView);
  recipeLayoutView.getRegion('modalRegion').show(new NewRecipeModal());
});

$(document).ready(function(){
  Shokugeki.App.start({});
});
