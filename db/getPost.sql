SELECT u.id as userid, u.firstname, u.lastname, u.avatar, p.id, p.title, p.body, p.date, p.thumbnailimg, p.rating, c.claps,c.userid as clapuser FROM users AS u FULL OUTER JOIN posts as P ON u.id = p.userid
FULL OUTER JOIN postclaps as C ON c.postid = p.id
WHERE p.id = $1;