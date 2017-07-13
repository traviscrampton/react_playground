class WelcomeController < ApplicationController

	def index
		@players = [
			{
				id: 1,
				name: 'Travis Crampton',
				score: 25
			},
			{
				id:2,
				name: 'Gabe Leoni',
				score: 100
			},
			{
				id: 3,
				name: 'Michaela Nye',
				score: 2
			},
		]
	end
end
