class GetPlayers

	def initialize
		@players = Player.all.includes(:score)
	end

	def call
		all_players = @players.map do |player|
			player_attributes = player.attributes
			player_attributes['score'] = player.score.attributes.without(:player_id)
			player_attributes
		end

		all_players
	end
end
