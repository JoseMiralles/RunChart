class Bookmark < ApplicationRecord

    validates :user_id, :route_id, presence: true

    belongs_to :user, class_name: :User, foreign_key: "user_id"
    belongs_to :route, class_name: :Route, foreign_key: "route_id"

end
