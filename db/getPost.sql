SELECT u.id, u.firstname, u.lastname, u.avatar, p.id, p.title, p.body, p.date, p.thumbnailimg, p.rating FROM users AS u JOIN posts as P ON u.id = p.userid WHERE p.id = $1;