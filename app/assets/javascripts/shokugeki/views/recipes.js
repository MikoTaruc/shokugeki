var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe"
  },

  events: {
    "click @ui.addButton": "addRecipe",
  },

  addRecipe: function(){
    $('#add-modal').modal('show');
  }
});
