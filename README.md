### Objective
Your assignment is to implement a URL shortening service using Python and FastAPI.

### Brief
ShortLink is a URL shortening service where you enter a URL such as https://codesubmit.io/library/react and it returns a short URL such as http://short.est/GeAi9K.

### Tasks
-   Implement assignment using:
    -   Language: **Python**
    -   Framework: **FastAPI**
    -   Two endpoints are required
        -   /encode - Encodes a URL to a shortened URL
        -   /decode - Decodes a shortened URL to its original URL.
    -   Both endpoints should return JSON
    - There is no restriction on how your encode/decode algorithm should work. You just need to make sure that a URL can be encoded to a short URL and the short URL can be decoded to the original URL. **You do not need to persist short URLs to a database. Keep them in memory.** 
    
-   Provide detailed instructions on how to run your assignment in a separate markdown file
-   Provide API tests for both endpoints

### Evaluation Criteria
-   **Python** best practices
-   API implemented featuring a /encode and /decode endpoint
-   Show us your work through your commit history
-   Completeness: did you complete the features? Are all the tests running?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?

### CodeSubmit
Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.
All the best and happy coding,

The TEAM23 GmbH Team

## Django:
   * django-admin startproject url_shortener
   * python manage.py runserver 
   * Django project is usually a collection of apps.
   * Move the app folder out of the project for deployment purposes.
     * such that the app and the project folder remains similar.
   * once done set the views for the api with Ninja.
   * docker compose up to run on Django 

## FastAPI
   * install and dockerize
   * https://fastapi.tiangolo.com/lo/
   * docker for deployment.

## Deployment: 
   * Heroku

## Pre Commit Fixes and Hooks 
   * 

## Connection with Frontend:

## isort and black add for correctness of software.

One tempting solution is to append the users IP address since IP adresses are 
unique  to compensate for the fact that MS5 hash creates collision.

But it can be that 2 users are from the same router. Then they
will have the same IP address which would not work.

## Frontend:
   * Project is bootstraped with NextJS
   * nextjs 
   * yarn run build
   * yarn run start