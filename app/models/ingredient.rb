class Ingredient < ActiveRecord::Base
  belongs_to :user
  belongs_to :user
  has_and_belongs_to_many :recipes
end
