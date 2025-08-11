CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    login TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE itens (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    preco DOUBLE PRECISION NOT NULL,
    quantidade INTEGER NOT NULL,
    ativo BOOLEAN NOT NULL
);

CREATE TABLE itens_img (
    id SERIAL PRIMARY KEY,
    itens_id INTEGER NOT NULL REFERENCES itens(id) ON DELETE CASCADE,
    url TEXT NOT NULL
);

CREATE TABLE itens_caracteristicas (
    id SERIAL PRIMARY KEY,
    itens_id INTEGER NOT NULL REFERENCES itens(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    valor TEXT NOT NULL
);
