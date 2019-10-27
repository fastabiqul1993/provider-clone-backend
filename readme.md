<h1 align='center'>Provider Clone Mobile Backend (Axis)</h1>
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/1200px-Axis_logo_2015.svg.png" width="250"/>
</p>
<br/><br/><br/>

<a href="#">
  <img src="https://img.shields.io/badge/Express-4.17.1-yellow.svg?style=flat-square" alt="npm version">
</a>
<a href="#">
  <img src="https://img.shields.io/badge/Postgres-7.12.1-blue.svg?style=flat-square" alt="npm version">
</a>
<a href="#">
  <img src="https://img.shields.io/badge/Sequelize-4.44.3-blue.svg?style=flat-square" alt="npm version">
</a>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [Contributors](#contributors)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- PostgreSQL - Download and Install [PostgreSQL](https://www.postgresql.org/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/fastaman993/provider-clone-backend.git
$ cd provider-clone-backend
$ npm install
```

### Create environment variable
```
"production": {
    "username": "your@username",
    "password": "your@password",
    "database": "your@databaseName",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
```

### Start development server
```
$ npm start
```

## Documentation

### Routes Example
#### User

- POST "/user/login" => Login endpoint, will return user data with token
- GET "/user/" => display all user, with default pagination {page: 1, limit: 10}.
  Header :
  - token -> token from login
  - header_key -> PR0V1D3R
- POST "/user/register" => register new user.

#### More

- Postman collections - Click [This](https://crimson-crater-9404.postman.co/collections/4256322-3a47dbf6-2729-4c2e-9f77-8dacdade4754?version=latest&workspace=935b9283-0d9a-4e3e-8fe2-dca940e4b8de) to look the example and how to use it


## Contributors

<table border="0">
  <tr>
    <td align="center">
      <a href="https://github.com/areydras">
        <img width="110" src="https://avatars3.githubusercontent.com/u/10308406?s=460&v=4"><br/>
          <sub><b>Areydra</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fikribasa">
        <img width="110" src="https://avatars0.githubusercontent.com/u/34205138?s=460&v=4"><br/>
          <sub><b>Fikri Basa</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Oreki13">
        <img width="110" src="https://avatars2.githubusercontent.com/u/52338405?s=460&v=4"><br/>
          <sub><b>Arfandy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fastaman993">
        <img width="110" src="https://avatars2.githubusercontent.com/u/54013498?s=460&v=4"><br/>
          <sub><b>Adhy F. Khoirot</b></sub>
      </a>
    </td>
  </tr>
</table>

## License
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
