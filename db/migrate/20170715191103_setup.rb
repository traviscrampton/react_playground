class Setup < ActiveRecord::Migration[5.0]
  def change
		create_table :players do |t|
			t.string :name
			t.text :description
		end

		create_table :scores do |t|
			t.integer :count
			t.integer :player_id
		end
  end
end
