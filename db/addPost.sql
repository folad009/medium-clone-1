INSERT INTO posts (userid,title, body, categories,thumbnailimg) VALUES ($1, $2, $3,$4,$5) RETURNING *;
