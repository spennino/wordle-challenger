class Api::GamesController < ApplicationController
  def create
    @game = Game.create(:word => params[:word])
  end

  def show
    @game = Game.find_by(id: params[:id])
    # render json: {
    #   word: @game.word
    # }
  end
end
