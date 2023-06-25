-- Database: step_addition

DROP DATABASE IF EXISTS step_addition;

CREATE DATABASE step_addition
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- Table: public.step_addition

DROP TABLE IF EXISTS public.step_addition;

CREATE TABLE IF NOT EXISTS public.step_addition
(
    sid integer NOT NULL DEFAULT nextval('step_addition_sid_seq'::regclass),
    steps jsonb NOT NULL,
    CONSTRAINT step_addition_pkey PRIMARY KEY (sid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.step_addition
    OWNER to postgres;
