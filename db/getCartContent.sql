-- SELECT *
-- FROM cart
-- WHERE sessionid = $1;

--^BEFORE


SELECT *

FROM cart

JOIN products ON cart.productid = products.productid

WHERE sessionid= $1;
