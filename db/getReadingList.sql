SELECT  r.id, p.id, p.title, p.body, p.thumbnailimg, p.date, p.userid FROM readinglist AS r JOIN posts AS p ON r.postid = p.id WHERE r.userid = $1;