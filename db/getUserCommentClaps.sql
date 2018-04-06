SELECT u.id as userid, u.firstname, u.lastname,u.avatar,c.id, c.postid ,cc.claps as usersclaps FROM users AS U JOIN comments AS c ON u.id = c.userid RIGHT JOIN commentclaps as cc ON c.id = cc.commentid WHERE u.id = $1 AND c.postid = $2 ORDER BY c.id DESC;