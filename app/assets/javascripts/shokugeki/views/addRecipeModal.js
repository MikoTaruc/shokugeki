var NewRecipeModal = Backbone.Marionette.ItemView.extend({
  template: "#recipe-add-modal",
  ui: {
    "name": "#recipe-name",
    "ingredients": "#ingredients",
    "directions": "#directions",
    "add": "#save"
  },

  events: {
    "click @ui.add": "add"
  },

  add: function() {
    var name = $(this.ui.name).val();
    var ingredients = $(this.ui.ingredients).val();
    var directions = $(this.ui.directions).val();

    var recipe = new Recipe({
      directions: directions,
      ingredients: ingredients,
      name: name
    });

    recipe.save();
    Shokugeki.myRecipes.fetch();
  }
});
