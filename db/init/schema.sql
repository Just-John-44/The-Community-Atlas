/*
schema.sql
Created: 7/9/2026
Last Edited: 7/9/2026
Author: John Wesley Thompson
*/

CREATE DATABASE the_community_atlas_db;

\connect the_community_atlas_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    usr_name varchar(255) NOT NULL,
    usr_pw varchar(255) NOT NULL
);