class ScoresController < ApplicationController
	respond_to :json

	def update
		score = Score.find(params[:id])
		score.update!(score_params)
		respond_with score
	end

	def show

	end

	private

	def score_params
		params.require(:score).permit(:count)
	end
end
