SELECT u.id, u.firstname, u.lastname, u.avatar, c.body, c.time FROM users AS U JOIN comments AS c ON u.id = c.userid WHERE c.postid = $1 ORDER BY c.id DESC;
