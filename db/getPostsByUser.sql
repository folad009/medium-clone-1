SELECT p.id as postid, p.userid, p.title, p.body, p.thumbnailimg, p.date, p.rating, u.firstname, u.lastname, u.avatar, u.bio fROM posts as p JOIN users as u ON p.userid = u.id WHERE p.userid = $1 ORDER BY p.date DESC;
