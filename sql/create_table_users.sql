CREATE TABLE learn.users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    fullName VARCHAR(255),
    email VARCHAR(255),
    picture_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";