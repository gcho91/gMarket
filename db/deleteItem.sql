DELETE
FROM cart
WHERE sessionid = $1 AND productid = $2;

SELECT *

FROM cart

JOIN products ON cart.productid = products.productid

WHERE sessionid= $1;
--returns new info
