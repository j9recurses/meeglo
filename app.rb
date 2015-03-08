require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json/ext' # required for .to_json



include Mongo
set :views, File.dirname(__FILE__) + '/views'
set :public_folder, File.dirname(__FILE__) + '/public'

class MySinatraApp < Sinatra::Base
end

#to start sudo -u mongodb mongod --repair -dbpath /var/lib/mongodb
configure do
  conn = MongoClient.new("localhost", 27017)
  set :mongo_connection, conn
  set :mongo_db, conn.db('meeglo')
end


get '/' do
  erb :contact
end

get '/contact' do
  erb :contact
end


post '/register/?' do
  #results = JSON.parse params
  content_type :json
  settings.mongo_db['meeglow'].insert params
  halt 200
end
