INSERT INTO posts (userid,title, body, categories) VALUES ($1, $2, $3,$4) RETURNING *;
