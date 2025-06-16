USE sakila;

-- 1. Number of documentaries with deleted scenes
SELECT COUNT(*) AS documentary_with_deleted_scenes
FROM film
WHERE special_features LIKE '%Deleted Scenes%'
  AND film_id IN (
    SELECT film_id FROM film_category
    WHERE category_id = (SELECT category_id FROM category WHERE name = 'Documentary')
);

-- 2. Number of Sci-Fi movies rented by the store managed by Jon Stephens
SELECT COUNT(*) AS scifi_movies_rented_by_jon_stephens_store
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN store s ON i.store_id = s.store_id
JOIN staff st ON s.manager_staff_id = st.staff_id
WHERE c.name = 'Sci-Fi'
  AND CONCAT(st.first_name, ' ', st.last_name) = 'Jon Stephens';

-- 3. Total sales from Animation movies
SELECT SUM(p.amount) AS total_sales_animation
FROM payment p
JOIN rental r ON p.rental_id = r.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Animation';

-- 4. Top 3 rented categories by “PATRICIA JOHNSON”
SELECT c.name AS category_name, COUNT(*) AS rental_count
FROM rental r
JOIN customer cu ON r.customer_id = cu.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE CONCAT(cu.first_name, ' ', cu.last_name) = 'PATRICIA JOHNSON'
GROUP BY c.name
ORDER BY rental_count DESC
LIMIT 3;

-- 5. Number of R rated movies rented by “SUSAN WILSON”
SELECT COUNT(*) AS r_rated_movies_rented_by_susan
FROM rental r
JOIN customer cu ON r.customer_id = cu.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE f.rating = 'R'
  AND CONCAT(cu.first_name, ' ', cu.last_name) = 'SUSAN WILSON';
