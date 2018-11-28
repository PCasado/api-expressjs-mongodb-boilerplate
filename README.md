# api-expressjs-mongodb-boilerplate
An boilerplate for Express APIs which will use MongoDB as main database. It uses Mongoose as ODM.

## Description
It's an (extremely) simple boilerplate for beginners on Express.js, but still being usable on medium projects. Here, Mongoose connection ,schema/model definition, routing and Express.js middlewares are covered with examples.

The current endpoints (examples) are

```
/
└── api/
    └── tasks/
        ├── GET /
        ├── POST / ( {name: String, priority: Number (0-2)} )
        └── GET :id/
```

You can freely delete these and make your own routes and models. Again, they're just examples.

## Requirements to run
1. [npm](https://www.npmjs.com/get-npm).
2. [node](https://nodejs.org/en/download/).
3. [MongoDB(CLI)](https://docs.mongodb.com/manual/administration/install-community/). Here you can skip Compass and service (if you want) installation.

## How to get and execute
To run the API, firstly you need to clone this repository. Follow these steps:

1. Get and install git CLI or something to clone repositories;
2. On a terminal inside your development/projects directory, run this command: `https://github.com/PCasado/api-expressjs-mongodb-boilerplate & cd api-expressjs-mongodb-boilerplate`;
3. Now you're ready to run the API.

If you have the MongoDB service, skip this instruction. Run this command to run the MongoDB daemon: `./rundb.sh` for Linux users and `rundb.bat` for Windows users.

Now you can run the API with the following command: `node index.js`. You can instead use `nodemon` or `pm2` or `forever` or `whatever to run js files` if you have it.

