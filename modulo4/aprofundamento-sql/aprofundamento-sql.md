ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) ALTER TABLE Actor DROP COLUMN salary;
-- Retira da tabela a coluna salário
-- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Altera o nome da propriedade gender para sex;
-- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- Apenas muda o tipo da propriedade para VARCHAR(255)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- ############################################################################################################################################################################
-- Exercício 2

UPDATE Actor
SET name= "Monica Tester", birth_date = "1970-01-25"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA DA PAZ"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

UPDATE Actor
SET name = "Roberto Da Hora", salary = 400, birth_date = "1999-01-11", gender = "male"
WHERE id = "005";

UPDATE Actor
SET name = "Roberto Da Brotherage", salary = 100, birth_date = "1999-01-10", gender = "male"
WHERE id = "099";

-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- Simplesmente não afetou nada

-- ############################################################################################################################################################################
-- Exercício 3

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;

-- ############################################################################################################################################################################
-- Exercício 4

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

-- ############################################################################################################################################################################
-- Exercício 5

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 2;

SELECT * FROM Actor 
WHERE gender = "female"
ORDER BY name ASC
LIMIT 2;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- Retornou de forma organizada por gênero a quantidade de cada ator masculino ou feminino.

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary ASC;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT gender, AVG(salary)
FROM Actor
GROUP BY gender;

-- ############################################################################################################################################################################
-- Exercício 6

ALTER TABLE Movies ADD playing_limit_date DATE;

ALTER TABLE Movies CHANGE rating rating FLOAT;

UPDATE Movies
SET playing_limit_date = "2022-12-12"
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = "2017-12-12"
WHERE id = "003";

DELETE FROM Movies
WHERE id = "001";

UPDATE Movies
SET synopsis = "Esse vai estar hoje na sessão da tarde"
WHERE id = "001";
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- O comando é lido mas não faz alteração nenhuma.

-- ############################################################################################################################################################################
-- Exercício 7

SELECT COUNT(*) FROM Movies
WHERE rating > 7.5;

SELECT AVG(rating) FROM Movies;

SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) FROM Movies
WHERE release_Date > CURDATE();

SELECT MAX(rating) FROM Movies;

SELECT MIN(rating) FROM Movies;

-- ############################################################################################################################################################################
-- Exercício 7

SELECT * FROM Movies
ORDER BY title;

SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;

SELECT * FROM Movies
WHERE release_Date < CURDATE()
ORDER BY release_Date DESC
LIMIT 3;

SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;