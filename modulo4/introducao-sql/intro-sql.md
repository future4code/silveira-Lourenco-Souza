USE `silveira-21814704-lourenco-souza`;

-- Exercício 1
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a)
-- VARCHAR(255) => variável recebe valores do tipo string com tamanho máximo de 255 caracteres.
-- DATE => variável recebe valores no formato de data YYYY/MM/DD.
-- PRIMARY KEY => chave única de cada tabela de valores.
-- NOT NULL => não pode ser um valor vazio, é requerido.

SHOW DATABASES;
-- apareceu uma tabela com todos os bancos de dados que eu tenho.

SHOW TABLES;
-- apareceu as tabelas que eu tenho

DESCRIBE Actor;
-- apareceu todos os valores da tabela Actor e suas propriedades.

-- ############################################################################################################################################################################
-- Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Lourenço Dsouza",
    9000000,
    "1996-02-11",
    "male"
);
 
 -- b)
 -- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY
 -- Código do Erro: 1062. Entrada '002' duplicada para uma chave primária
 -- O id inserido é semelhante a uma entrada já existente. Como o ID é um valor que deve ser único para cada elemento, não pode ser igual a nenhum já existente.
 
 -- ////////////////////////////////////////////////////////////////////////////////////////////
 
 INSERT INTO Actor (id, name, salary)
 VALUES(
   "003", 
   "Fernanda Montenegro",
   300000,
   "1929-10-19", 
   "female"
 );
 
-- Error Code: 1136. Column count doesn't match value count at row 1
-- Código de Erro: 1136. Contador da coluna não corresponde ao valor do contador na linha 1.
-- Falta os tipos birth_date e gender serem especificados como parâmetros da querry

-- Correto: 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "003", 
   "Fernanda Montenegro",
   300000,
   "1929-10-19", 
   "female"
 );
 -- 1 row(s) affected
 
  -- ////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- Error Code: 1364. Field 'name' doesn't have a default value
-- Código do Erro: 1364. Campo 'nome' não tem um valor padrão
-- Está faltando inserir o nome como parâmetro e também inserir um valor para o nome, pois é do tipo NOT NULL.

-- Correto: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
 -- 1 row(s) affected

  -- ////////////////////////////////////////////////////////////////////////////////////////////
  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- Código do Erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
-- O valor da data foi passado como número e não uma string.

-- Correto:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
 -- 1 row(s) affected

  -- ////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"006",
    "Lourenço De Souza",
    1000000000,
    "1996-02-11",
    "male"
);

-- ############################################################################################################################################################################
-- Exercício 3

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name FROM Actor
WHERE gender = "male";

SELECT * FROM Actor
WHERE gender = "female";

SELECT salary FROM Actor
WHERE name = "Tony Ramos";

SELECT * FROM Actor
WHERE gender = "invalid";
-- Veio como resultado uma tabela com todos os valores NULL

SELECT id, name, salary FROM Actor
WHERE salary < 500000

SELECT id, nome from Actor WHERE id = "002";
-- Error Code: 1064. You have an error in your SQL syntax;
-- Código do Erro: 1064. Você tem um erro na síntax do seu SQL
-- O atributo nome deve ser substituído por name para funcionar

-- Correto:
SELECT id, name from Actor WHERE id = "002";
 -- 1 row(s) affected

-- ############################################################################################################################################################################
-- Exercício 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- Como resultado obtive os dados dos atores Antônio Fagundes e Juliana Paes, pois são os únicos que se encaixam no filtro acima

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 350000 AND  900000;

-- ############################################################################################################################################################################
-- Exercício 5

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

DESCRIBE Movies;

INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    "7"
);

INSERT INTO Movies
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);

INSERT INTO Movies
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);

INSERT INTO Movies
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);

INSERT INTO Movies
VALUES(
	"004",
    "Os Trombadinhas",
    "Em São Paulo, um empresário quer reabilitar as crianças de rua, chamadas de 'trombadinhas', através de um projeto social. Depois de ser desencorajado pela própria polícia, busca a ajuda do treinador do time juvenil do Santos Futebol Clube.",
    "1979-01-01",
    "10"
);

-- ############################################################################################################################################################################
-- Exercício 6

SELECT id, title, rating FROM Movies
WHERE id = "002";

SELECT * FROM Movies
WHERE title = "doce de mãe";

SELECT id, title, synopsis FROM Movies
WHERE rating >= 7;

-- ############################################################################################################################################################################
-- Exercício 7

SELECT * FROM Movies
WHERE title LIKE "%vida%";

SELECT * FROM Movies
WHERE title OR synopsis LIKE "%anos%";

SELECT * FROM Movies
WHERE release_Date < "2022-06-07";

SELECT * FROM Movies
WHERE release_Date < "2022-06-07" AND (title OR synopsis LIKE "%anos%") AND rating > 7;