export const up = () => {
  return `
    INSERT INTO products (name, price, imageUrl, description)
    VALUES
    ('Easter Studs', 18.00, '/images/products/35435.jpg', 'Easter studs available in three different colors and vibes.'),
    ('Mirage Moccasin', 20.00, '/images/products/43488.jpg', 'This collection comes into a few different styles for anyone who likes neutral colors. Can be worn for a casual day out or a classy dinner date. Jump rings and hooks are all gold-plated and hypoallergenic, perfect for sensitive ears.'),
    ('Blooming Petals', 20.00, '/images/products/54343.jpg', 'Accessorize your summer wardrobe with these classy petals. It comes in neutral plain colors or hand-painted borders with gold acrylic. The V-shaped hooks are gold-plated and hypoallergenic for sensitive ears.'),
    ('Chakras & Hand of Fatima', 20.00, '/images/products/16543.jpg', 'Are you looking for some symbolic earrings!? Check out these chakras earrings made magically using the hand of Fatima and V-shaped gold-plated hooks.');
  `
}

export const down = () => {
  // return SQL query for migration down
}
