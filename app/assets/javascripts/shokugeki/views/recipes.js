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
    // Display modal
    $('#mikomodal').modal('show');
  },

  riasFunction: function(){
    $('.cookbook-label h3').text("MIKO LOVES RIA");
  }
});
