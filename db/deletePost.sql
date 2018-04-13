DELETE FROM postcategory WHERE postid = 137;
DELETE FROM comments where postid = $1;
DELETE FROM posts where id = $1;