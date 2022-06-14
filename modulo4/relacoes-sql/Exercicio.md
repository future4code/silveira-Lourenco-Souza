-- ###############################################################################################################################################
-- Exercício 1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
-- Uma chave extrangeira é um valor que referencia o valor contido em outra tabela.

INSERT INTO Rating 
VALUES (
	"0001",
    "O filme deu sono demais...",
    6.0,
    "003"
);

INSERT INTO Rating 
VALUES (
	"0007",
    "Avaliando um filme que não existe...",
    0,
    "666"
);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
-- (`silveira-21814704-lourenco-souza`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Uma forma de dizer que o id passado no valor que referencia outra tabela não existe.

ALTER TABLE Movies DROP COLUMN rating;

DELETE FROM Movies
WHERE id= "001";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
-- (`silveira-21814704-lourenco-souza`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Não foi possível apagar pois existe uma tabela referenciando

-- ###############################################################################################################################################
-- Exercício 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- Dois valores cada um referenciando ao um tipo de tabela diferente.

INSERT INTO MovieCast 
VALUES (
	"099",
    "001"
);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
-- (`silveira-21814704-lourenco-souza`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

DELETE FROM Actor
WHERE id = "007";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
-- (`silveira-21814704-lourenco-souza`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

-- ###############################################################################################################################################
-- Exercício 3

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- O operador ON é para indicar um organização que não haja informações repetidas.

SELECT m.id AS movie_id, r.rate AS rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

-- ###############################################################################################################################################
-- Exercício 4

SELECT m.id AS movie_id, m.title, r.rate AS rating, r.comment AS rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;

SELECT m.id AS movie_id, m.title, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

SELECT AVG(r.rate), m.id, m.title FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

-- ###############################################################################################################################################
-- Exercício 5

SELECT * FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
-- Porque estamos trabalhando com duas tabelas

SELECT m.id AS movie_id, m.title, a.id AS actor_id, a.name AS actor_name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
-- Tudo certo.

SELECT 
	m.id AS movie_id,
	m.title,
    a.id AS actor_id,
    a.name,
    r.rate,
    r.comment
FROM Movies m
LEFT JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
