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
    // Display modal
    $('#add-modal').modal('show');
  },
});
