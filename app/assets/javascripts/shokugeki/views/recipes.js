var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list container",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe",
    "search": ".search-form"
  },

  events: {
    "click @ui.addButton": "openModal",
    "keyup @ui.search": "searchRecipe"
  },

  addItem: function(){

  },

  attachHtml: function(collectionView, childView, index) {
    $('#all-recipes').isotope('insert', childView.el);
  },

  onShow: function() {
    $('#all-recipes').isotope({
      itemSelector: '.single-recipe',
      masonry: {
        gutter: 5,
        isFitWidth: true
      }
    });
  },

  onRender: function() {
  },

  openModal: function() {
    $('#add-modal').modal('show');
  },

  searchRecipe: function(e) {
    e.preventDefault();
  }
});
