# NodeJS TypeScript Microservice Architecture

A non-monolithic approach to a highly scalable architecture based on NodeJS, TypeScript, MongoDB and Docker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have MongoDB installed in your local environment
[Install MongoDB](https://docs.mongodb.com/v3.2/administration/install-community/)

If you want to build a docker image you need a local Docker environment also
[Install Docker](https://docs.docker.com/install/)

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the project

```
git clone https://github.com/nyandrianinamamy/nodejs-microservice.git
cd nodejs-microservice
```

Install dependencies

```
npm install
```

Run

```
npm run dev
```

Test if everything's okay

```
curl localhost:4004/_health
```

Should return the running time

## Running the tests

Unit testing

```
npm run test
```

## Authors

- **Ny Andrianina Mamy R.** - _Initial work_ - [nyandrianinamamy](https://github.com/nyandrianinamamy)
- **Ny Hasinavalona R.** - _Initial work_ - [nyhasina](https://github.com/nyhasina)

## License

This project is licensed under the BSD License - see the [LICENSE.md](LICENSE.md) file for details
