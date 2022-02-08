require 'securerandom'

class Game < ApplicationRecord
  validates_presence_of :word
  validates_presence_of :code
  validates_uniqueness_of :code

  before_validation :set_unique_code, :on => :create
  
  protected

  def set_unique_code
    alphanumeric = SecureRandom.alphanumeric(6)
    while Game.find_by(code: alphanumeric).present?
      alphanumeric = SecureRandom.alphanumeric(6)
    end
    self.code = alphanumeric
  end
end
