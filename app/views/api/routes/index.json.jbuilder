json.key_format! camelize: :lower
@routes.each do |route|
    json.set! route.id do
        json.partial! 'route', route: route
    end
end