# varmiguemunoz-api

this is a rest api in which you can get, delete, update, get and add [CRUD] both to consume products for an online store and to consume users.

mainly developed in a mac os environment, using technologies such as: express, docker, postgresql and node js.

the api integrates middlewares to recognize errors and return them to the user with better formatting.
This with the purpose of making the api, sustainable and scalable in time.

it also integrates the following libraries:
eslint. prettier, nodemon, cors, dotenv, express, joi, pg, pg-hstore and sequelize.

Using "sequelize" as the library that generates the best render of our api, with this I generate the connections to the database, specially the creation of tables in postgresql and the searches [CRUD].

## Download Tools

### Homebrew
```npm
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Insomnia

```npm
brew install --cask insomnia
```

### docker

```npm
brew install docker
```

## How to use?

<B>Clone repository into your computer</B>

### Install Dependencies

```npm
npm install
```

### Open the Proyect in your text editor

```npm
code .
```

### Modifiqued the file ".env.example"

1. <B>Rename the file like ".env"</B>

2. Add this code

      PORT=8000
      DB_USER=nico
      DB_PASSWORD=admin123
      DB_HOST=localhost
      DB_NAME=my_store
      DB_PORT=5432


### Initialize the container in docker

```npm
docker-compose up -d pgadmin
```

```npm
docker-compose up -d postgres
```

### Run the server

```npm
npm run start
```

### Go to insomnia

Make your request!

```npm
[GET] http://localhost:8000/api/v1/products
```

```npm
[GET] http://localhost:8000/api/v1/users
```

```npm
[GET/:id] http://localhost:8000/api/v1/products/1
```

```npm
[GET/:id] http://localhost:8000/api/v1/users/1
```

```npm
[POST] http://localhost:8000/api/v1/products
```

```npm
[POST] http://localhost:8000/api/v1/users
```

```npm
[DELETE/:id] http://localhost:8000/api/v1/products/1
```

```npm
[DELETE/:id] http://localhost:8000/api/v1/users/1
```

```npm
[PUT/:id] http://localhost:8000/api/v1/products/1
```

```npm
[PUT/:id] http://localhost:8000/api/v1/users/1
```


