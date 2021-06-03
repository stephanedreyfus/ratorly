CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  id INTEGER NOT NULL,
  positive INTEGER NOT NULL,
  negative INTEGER NOT NULL,
  title TEXT NOT NULL,
  release_date VARCHAR(25) NOT NULL,
  poster_path TEXT NOT NULL
);
