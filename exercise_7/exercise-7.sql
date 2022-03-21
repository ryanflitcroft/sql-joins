-- find all film titles rented out by customers who live in the city of Dundee
-- Similar to exercise 6 but you need a few more joins to get the city name

SELECT
	title
FROM
	city
RIGHT JOIN
	address
ON
	city.city_id = address.city_id
RIGHT JOIN
	customer
ON
	address.address_id = customer.address_id
RIGHT JOIN
	rental
ON
	customer.customer_id = rental.customer_id
RIGHT JOIN
	inventory
ON
	rental.inventory_id = inventory.inventory_id
RIGHT JOIN
	film
ON
	inventory.film_id = film.film_id
WHERE
	city.city = 'Dundee';