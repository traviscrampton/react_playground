class WelcomeController < ApplicationController

	def index
		@players = GetPlayers.new().call
	end
end
