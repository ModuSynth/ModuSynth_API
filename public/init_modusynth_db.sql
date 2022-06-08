--connect as super user then --

DROP DATABASE IF EXISTS modusynth;
CREATE DATABASE modusynth;
ALTER DATABASE modusynth OWNER TO modusynth;

CREATE USER modusynth WITH PASSWORD '0000';
GRANT ALL PRIVILEGES ON DATABASE 'modusynth' to modusynth;

\c modusynth

CREATE TABLE STAGES (
    stage_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE NODES (
    node_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    type VARCHAR(50),
    stage_id INTEGER
);
ALTER TABLE NODES ADD FOREIGN KEY (stage_id) REFERENCES stages (stage_id);
    