class Player < ActiveRecord::Base
	validates_presence_of :name
	has_one :score 
end
