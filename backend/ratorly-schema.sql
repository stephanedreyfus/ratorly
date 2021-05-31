CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  positive INTEGER NOT NULL,
  negative INTEGER NOT NULL,
  movie_title TEXT NOT NULL,
  movie_year VARCHAR(25) NOT NULL
);
