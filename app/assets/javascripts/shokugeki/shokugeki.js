var Shokugeki = {};

Shokugeki.App = new Backbone.Marionette.Application();

Shokugeki.App.addRegions({
  appRegion: "#main"
});

var RecipeLayoutView = Marionette.LayoutView.extend({
  template: "#layout-recipe-template",
  regions: {
    mainRegion: "#content",
    modalRegion: "#modals"
  }
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
