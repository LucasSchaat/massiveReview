UPDATE posts
SET topic = $2, text = $3
WHERE id = $1;

SELECT *
FROM posts;