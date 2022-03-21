-- find all film titles rented out by customers who live in the country of Peru
-- Similar to exercise 7 with an additional join to get country name

SELECT
	title
FROM
	country
RIGHT JOIN
	city
ON
	country.country_id = city.country_id
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
	country.country = 'Peru';