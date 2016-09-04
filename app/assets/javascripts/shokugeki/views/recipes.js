var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe",
    "randomButton": "#random-recipe"
  },

  events: {
    "click @ui.addButton": "addRecipe",
    "click @ui.randomButton": "randomRecipe"
  },

  addRecipe: function(){
    $('#add-modal').modal('show');
  },

  randomRecipe: function(){
    Shokugeki.myRecipes.fetch();
  }
});
