INSERT INTO postclaps (userid,postid) VALUES ($1,$2);

SELECT * FROM postclaps WHERE postid = $2;