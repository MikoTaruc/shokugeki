var Recipes = Backbone.Collection.extend({
  model: Recipe,
  url: '/recipes.json'
});
