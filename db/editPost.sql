UPDATE posts SET title = $2, body = $3 WHERE id = $1;

SELECT * from posts WHERE id = $1;