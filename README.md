# URL Shortener

A lightweight URL shortening service built using Node.js, Express, MongoDB, and Mongoose.  
It generates unique short IDs for long URLs and redirects users efficiently using dynamic routing.

---

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- `nanoid`

---

## Features

- Generate unique short URLs using `nanoid`
- Store URL mappings in MongoDB
- Dynamic route-based redirection
- Unique constraint enforcement at database level
- Basic error handling for invalid short IDs
- Minimal UI for testing functionality

## Architecture Overview

1. User submits a long URL via form
2. Backend generates a 6-character short ID
3. Mapping is stored in MongoDB
4. Visiting `/:shortID` performs a database lookup
5. If found -> server responds with HTTP redirect
6. If not found -> returns 404 response

---

## Project Structure

```
.
├─ config/
├─ controllers/
├─ models/
├─ routes/
├─ index.js
├─ index.html
```

---

## Author

&copy; 2026 [Saptaparno Chakraborty](https://github.com/schak04).  
All rights reserved.

---