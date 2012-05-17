Jack::Application.routes.draw do

# See how all your routes lay out with "rake routes"
# Priority is based upon order of creation: first created, highest priority.

  # The root of this site points to the articles index
  root                  :to => "articles#index"

  # The "about" pages, non-article static pages
  match '/acknowl',     :to => 'about#acknowl'
  match '/author',      :to => 'about#author'
  match '/colophon',    :to => 'about#colophon'
  match '/copyright',   :to => 'about#copyright'
  match '/foreword',    :to => 'about#foreword'
  match '/intro',       :to => 'about#intro'
  match '/preface',     :to => 'about#preface'
  match '/toc',         :to => 'about#toc'

  match '/galleries',   :to => 'augment#galleries'
  match '/integrate',   :to => 'augment#integrate'
  match '/maps',        :to => 'augment#maps'

  resources :articles do
    resources :comments
  end

end

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end


  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
