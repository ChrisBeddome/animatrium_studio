export const up = () => {
  return `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(2000),
      price DECIMAL(8,2),
      imageUrl VARCHAR(255),
      PRIMARY KEY (id)
    );
  `
}

export const down = () => {
  return `DROP TABLE IF EXISTS products;`
}
