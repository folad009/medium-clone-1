
SELECT u.id as userid, u.firstname, u.lastname,u.avatar,c.id, c.body, c.time,c.claps FROM users AS U JOIN comments AS c ON u.id = c.userid WHERE c.postid = $1 ORDER BY c.id DESC;

