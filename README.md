# Take a look over News backend project

This is an apiRest that handles all the information and endpoints of the
codespace website

Here you can find a quick guide to see how this project works and how
to use it

## Ussage

1. `npm install` before all, don't forget about the basics
2. create a .env file and create these environment variables
   `PORT=3004 DEBUG=news-backend-app:* LOGIN_CREDENTIALS=mongodb+srv://Emiliano:Emiliano@cluster0.de4dd.mongodb.net/AllFundsInterview-NewsProyect`
3. `npm run dev` to deploy the server on localHost

### Starting with endpoints

## METHOD GET

`/news` returns all the news collection

## METHOD PATCH

`/news/:id` updates the item with that id

## METHOD DELETE

`/news/:id` delete the item from the database

#### The biggest challenge ?

You need to configure jest,prettier, eslint,typescript, use babel to convert ecmascript 6, pass the sonarScanner and make all the tools work in harmony.
