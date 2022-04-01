-- Add migration script here

-- Create Users Table
CREATE TABLE users(
    id uuid NOT NULL,
    PRIMARY KEY(id),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    created_at timestamptz NOT NULL,
    passphrase TEXT NOT NULL 
);