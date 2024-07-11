# URL Shortener

Design a url shortener service that takes in valid URL and returns a shortened URL, redirecting user to the
previously provided URL

Also, keep track of total visits/clicks on URL

## Technologies Used
- NodeJS
- ExpressJS
- Visual Studio Code
- EJS
- HTML
- Postman

### Routes

POST/URL - Generates a new short url and returns the shortened url in format example.com/random-id
GET/:id - redirects user to original URL
GET/URL/analytics/:id - Returns the clicks for provided short id
