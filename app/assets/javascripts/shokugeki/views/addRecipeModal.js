var NewRecipeModal = Backbone.Marionette.ItemView.extend({
  template: "#recipe-add-modal",
  ui: {
    "name": "#recipe-name",
    "ingredients": "#ingredients",
    "ingredientWrapper": "#add-ingredients-wrapper",
    "directions": "#directions",
    "add": "#save",
    "addIngredient": "#add-ingredient"
  },

  events: {
    "click @ui.add": "add",
    "click @ui.addIngredient": "addIngredient"
  },

  add: function() {
    var name = $(this.ui.name).val();
    var directions = $(this.ui.directions).val();
    var ingredients = [];
    _.each($('.ingredient-input'), function(i){
      ingredients.push(i.value);
    });

    var recipe = new Recipe({
      directions: directions,
      ingredients: ingredients,
      name: name
    });

    recipe.save();
    Shokugeki.myRecipes.fetch();
  },

  addIngredient: function() {
    var ingredientInput = "<input type='text' class='ingredient-input'></input>";
    $(this.ui.ingredientWrapper).prepend(ingredientInput);
  }
});
