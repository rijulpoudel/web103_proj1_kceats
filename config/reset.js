const pool = require("./database");
const restaurants = require("../data");

const createRestaurantsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS restaurants;

    CREATE TABLE IF NOT EXISTS restaurants (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      cuisine VARCHAR(255) NOT NULL,
      neighborhood VARCHAR(255) NOT NULL,
      priceRange VARCHAR(10) NOT NULL,
      description TEXT NOT NULL,
      mustOrder VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 restaurants table created successfully");
  } catch (err) {
    console.error("⚠️ error creating restaurants table", err);
  }
};

const seedRestaurantsTable = async () => {
  await createRestaurantsTable();

  restaurants.forEach((restaurant) => {
    const insertQuery = {
      text: `INSERT INTO restaurants (id, name, cuisine, neighborhood, priceRange, description, mustOrder, image)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    };

    const values = [
      restaurant.id,
      restaurant.name,
      restaurant.cuisine,
      restaurant.neighborhood,
      restaurant.priceRange,
      restaurant.description,
      restaurant.mustOrder,
      restaurant.image,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting restaurant", err);
        return;
      }
      console.log(`✅ ${restaurant.name} added successfully`);
    });
  });
};

seedRestaurantsTable();
