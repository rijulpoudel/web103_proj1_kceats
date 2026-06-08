# WEB103 Project 1 - _KC Eats_

Submitted by: **Rijul Poudel**

About this web app: **A listicle of the best local restaurants in Kansas City. No chains. Each spot includes the cuisine type, neighborhood, price range, and a short description. Click any entry to see the full detail view.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3000/restaurants/joes-kansas-city` and `localhost:3000/restaurants/novel`**
  - [x] _Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation_
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Editorial newspaper-style design with custom typography (Playfair Display + IBM Plex Mono)
- [x] Numbered entries with warm off-white color palette for a handcrafted aesthetic

## Video Walkthrough

Here's a walkthrough of implemented required features:

<a href='https://imgur.com/a/xUSoy2D' title='Video Walkthrough'>Link to GIF</a>

GIF created with Kap

## Notes

The main challenge was structuring the Express routes cleanly so that both the list view and individual detail pages shared the same data source. Styling was done without a frontend framework, using Pico CSS as a base with a custom stylesheet on top.

## License

Copyright 2026 Rijul

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
