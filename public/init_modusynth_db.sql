

DROP DATABASE IF EXISTS modusynth;
CREATE DATABASE modusynth;
ALTER DATABASE modusynth OWNER TO modusynth_owner;

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
    