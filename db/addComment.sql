INSERT INTO comments (userid, postid, body) VALUES ($1, $2,$3) RETURNING *;
