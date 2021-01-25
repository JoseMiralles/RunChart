# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#            api_user_index POST   /api/user(.:format)                                                                      api/user#create {:format=>:json}
#                  api_user GET    /api/user/:id(.:format)                                                                  api/user#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                api_routes GET    /api/routes(.:format)                                                                    api/routes#index {:format=>:json}
#                           POST   /api/routes(.:format)                                                                    api/routes#create {:format=>:json}
#                 api_route GET    /api/routes/:id(.:format)                                                                api/routes#show {:format=>:json}
#                           PATCH  /api/routes/:id(.:format)                                                                api/routes#update {:format=>:json}
#                           PUT    /api/routes/:id(.:format)                                                                api/routes#update {:format=>:json}
#                           DELETE /api/routes/:id(.:format)                                                                api/routes#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :destroy, :index, :show, :update]
  end

  root "static_pages#root"

end
