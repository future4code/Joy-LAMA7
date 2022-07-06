CREATE TABLE IF NOT EXISTS LAMA_USUARIOS (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM("NORMAL", "ADMIN") NOT NULL DEFAULT "NORMAL"
);

DESCRIBE LAMA_USUARIOS;

DROP TABLE LAMA_USUARIOS;