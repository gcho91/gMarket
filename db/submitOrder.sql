INSERT INTO orders ( sessionid, firstname, lastname, email, street1, street2, city, state, zip )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 )
RETURNING *;
