require 'sinatra'

get("/") do
    @name = "World!"
    erb :index
end

post("/wat") do
    params
end
