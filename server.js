const express = require("express");
const path = require("path");
const pool = require("./config/database");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HOME ROUTE
app.get("/", async (req, res) => {
  const results = await pool.query("SELECT * FROM restaurants");
  const restaurants = results.rows;
  let cards = restaurants
    .map(
      (r, i) => `
    <article class="restaurant-card">
      <div class="card-number">0${i + 1}</div>
      <div class="card-body">
        <h2><a href="/restaurants/${r.id}">${r.name}</a></h2>
        <p class="tags">
          <span>${r.cuisine}</span>
          <span>${r.pricerange}</span>
          <span>${r.neighborhood}</span>
        </p>
        <p>${r.description}</p>
      </div>
    </article>
  `,
    )
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>KC Eats</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <main class="container">
        <div class="masthead">
          <h1>KC Eats</h1>
          <span class="issue-line">Vol. 1 &nbsp;|&nbsp; Kansas City, MO &nbsp;|&nbsp; No chains.</span>
        </div>
        <p class="subtitle">Independent guide to local restaurants — curated by humans, for humans</p>
        <div class="restaurant-grid">
          ${cards}
        </div>
      </main>
    </body>
    </html>
  `);
});

// DETAIL ROUTE
app.get("/restaurants/:id", async (req, res) => {
  const results = await pool.query("SELECT * FROM restaurants WHERE id= $1", [
    req.params.id,
  ]);
  const restaurant = results.rows[0];

  if (!restaurant) {
    return res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${restaurant.name} | KC Eats</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <main class="container">
        <a class="back-link" href="/">← All restaurants</a>
        <div class="detail-header">
          <h1>${restaurant.name}</h1>
          <p class="tags">
            <span>${restaurant.cuisine}</span>
            <span>${restaurant.pricerange}</span>
            <span>${restaurant.neighborhood}</span>
          </p>
        </div>
        <div class="detail-body">
          <p>${restaurant.description}</p>
          <div class="must-order">Must order — ${restaurant.mustorder}</div>
        </div>
      </main>
    </body>
    </html>
  `);
});

// 404 ROUTE
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
