UPDATE comments SET claps = $1 WHERE id = $2; 

SELECT u.id as userid, u.firstname, u.lastname,u.avatar,c.id, c.body, c.time,c.claps FROM users AS u JOIN comments AS c ON u.id = c.userid WHERE c.postid = $3 ORDER BY c.id DESC;