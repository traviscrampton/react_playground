class PlayersController < ApplicationController
	respond_to :json

	def create
		player = Player.create(player_params)
		Score.create(player_id: player.id, count: 0)

		respond_with(player) do |format|
			format.json { render json: get_player_attributes(player)}
		end
	end

	def show

	end

	def update

	end

	def destroy

	end

	private

	def get_player_attributes(player)
		player_attributes = player.attributes
		player_attributes['score'] = player.score.attributes
		player_attributes
	end

	def player_params
		params.permit(:name, :description)
	end
end
