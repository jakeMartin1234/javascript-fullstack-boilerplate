# Fullstack Javascript Server Boilerplate #

## Setup ##

- Clone this repo
```angular2html
git clone git@github.com:jakeMartin1234/fullstack-javascript-boilerplate.git
```
- Download Docker for your OS: https://www.docker.com/products/docker-desktop
- Run the following command in the root directory of the project to build and start the Docker containers.
```angular2html
docker-compose up --build
```
- The Docker server needs to be rebuilt every time you make changes to the project.
- If the Docker containers are already built, you can deploy the server with the following command:
```angular2html
docker-compose up
```

## Development ##

As you develop your program, you might have to make changes to the respective frontend and backend Dockerfiles to install new dependencies.

You may find a faster development workflow by running the frontend and backend in separate terminal instances.
In one terminal instance, run the following command:
```angular2html
cd frontend
npm install
npm start
```
In the second terminal instance, run the following command:
```angular2html
cd backend
npm install
npm start
```
This might aid in faster development as you expand the program beyond the boilerplate.