class Route < ApplicationRecord

    validates :creator_id, :name, :route, :start_lat, :start_lng, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User

    # Gets all of the routes withing the given South-West, and North-East points.
    def self.select_in_bounds (bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

end
