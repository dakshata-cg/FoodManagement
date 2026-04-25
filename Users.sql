--- 1. Define the custom ENUM type
-- This must be created before the table references it.
CREATE TYPE user_role AS ENUM ('Client', 'Admin', 'Vendor', 'Driver');

--- 2. Create the User table
CREATE TABLE "users" (
    -- SERIAL creates an auto-incrementing integer ID
    id SERIAL PRIMARY KEY,
    
    -- Basic info with constraints
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    
    -- Address and Phone
    address TEXT,
    phone_no VARCHAR(20),
    
    -- Role using the ENUM we created above
    user_type user_role DEFAULT 'Client',
    
    -- Profile Image URL with your default link
    profile_url TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


select * from Users