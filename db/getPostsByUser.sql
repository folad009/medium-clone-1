SELECT * FROM posts FULL OUTER JOIN users ON posts.userid = users.id WHERE posts.userid = $1 ORDER BY date DESC;
