SELECT p.id, p.title, p.body, p.thumbnailimg, p.date, p.rating, u.id as userid, u.firstname, u.lastname, u.avatar, u.bio , count(c.postid) as numofcomments FROM posts as p JOIN users as u on p.userid = u.id FULL OUTER JOIN comments as c on c.postid = p.id group by p.id, u.id, u.firstname, u.lastname, u.avatar, u.bio;
