class Bookmark < ApplicationRecord

    validates :user_id, :route_id, presence: true

    has_one :user, class_name: "user", foreign_key: "user_id"
    has_one :route, class_name: "route", foreign_key: "route_id"

end
