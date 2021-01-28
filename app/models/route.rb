class Route < ApplicationRecord

    validates :creator_id, :name, :route, :start_lat, :start_lng, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User

    has_many :favorite_users,
        foreign_key: :route_id,
        class_name: :Bookmark

    # Gets all of the routes withing the given South-West, and North-East points.
    def self.get_filtered (filters)
        res = self.where("start_lat < ?", filters[:bounds][:northEast][:lat])
            .where("start_lat > ?", filters[:bounds][:southWest][:lat])
            .where("start_lng > ?", filters[:bounds][:southWest][:lng])
            .where("start_lng < ?", filters[:bounds][:northEast][:lng])
            .limit(10)
        if filters.key?(:name)
            res = res.where("name LIKE ?", "%#{filters[:name]}%")
        end
        return res;
    end

end
