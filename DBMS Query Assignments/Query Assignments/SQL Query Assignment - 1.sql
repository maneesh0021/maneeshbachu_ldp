USE sakila;

-- 1. PG-13 rated comedy movies (Without using film_list)
SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE f.rating = 'PG-13' AND c.name = 'Comedy';

-- 2. Top 3 rented horror movies
SELECT f.title, COUNT(r.rental_id) AS rental_count
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Horror'
GROUP BY f.film_id
ORDER BY rental_count DESC
LIMIT 3;

-- 3. Customers from India who rented Sports movies
SELECT DISTINCT c.customer_id, c.first_name, c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category cat ON fc.category_id = cat.category_id
WHERE co.country = 'India' AND cat.name = 'Sports';


-- 4. Customers from Canada who rented "NICK WAHLBERG" movies
SELECT DISTINCT cu.customer_id, cu.first_name, cu.last_name
FROM customer cu
JOIN address a ON cu.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN rental r ON cu.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a2 ON fa.actor_id = a2.actor_id
WHERE co.country = 'Canada'
  AND CONCAT(a2.first_name, ' ', a2.last_name) = 'NICK WAHLBERG';


--  5. Number of movies “SEAN WILLIAMS” acted in
SELECT COUNT(DISTINCT f.film_id) AS movie_count
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE CONCAT(a.first_name, ' ', a.last_name) = 'SEAN WILLIAMS';
