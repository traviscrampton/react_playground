Rails.application.routes.draw do
  root 'welcome#index'

	resources :players
	resources :scores
end
