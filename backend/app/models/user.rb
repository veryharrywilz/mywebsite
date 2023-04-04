require 'bcrypt'

class User < ApplicationRecord
    has_secure_password
    include BCrypt
    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :username, length: { minimum: 5 }
    validates :email, uniqueness: true 
    validates :password, length: { in: 6..20 }

    has_many :comments

    

end
