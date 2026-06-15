# WEB103 Project 2 - _KC Eats_

Submitted by: **Rijul Poudel**

About this web app: **A listicle of the best local restaurants in Kansas City. No chains. Each spot includes the cuisine type, neighborhood, price range, and a short description, now served from a PostgreSQL database hosted on Render. Click any entry to see the full detail view.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT \* FROM tablename;' to display your table contents.**

The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Editorial newspaper-style design with custom typography (Playfair Display + IBM Plex Mono)
- [x] Numbered entries with warm off-white color palette for a handcrafted aesthetic

## Video Walkthrough

Here's a walkthrough of implemented required features:

<a href= 'https://imgur.com/a/NO1MQaK'>

GIF created with Kap

## Notes

Converted the app from hardcoded data in `data.js` to a PostgreSQL database hosted on Render. Added a connection pool (`config/database.js`) and a seed script (`config/reset.js`) that creates and populates the `restaurants` table on every server start. The biggest gotcha was that Postgres lowercases unquoted column names, so fields like `priceRange` and `mustOrder` had to be accessed as `pricerange` and `mustorder` in the route handlers.

## License

Copyright 2026 Rijul

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
