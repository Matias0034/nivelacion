____________________________________________________________________________________________________________
http://localhost:8080/users/add  does not have authentication(bearer token), for you can create users and testing

http://localhost:8080/docs       route for gets the documentation API, this route does not require authentication
__________________________________________________________________________________
The project has environment vars, please creates an .env file,
please keep the AUTH_JWT_SECRET

AUTH_JWT_SECRET=ph1jAIyxssQLkWr4SKWFnvRp9ciyjgJ-vTJHxWRXM_w


PORT=            port here
USER_DB=         user of database here
PASS_DB=         password of database here
HOST_DB=         host  here (by default can be localhost or 127.0.0.1)
DATABASE_NAME=   name of database here
DIALECT=         type of database that you use, (please insert 'mysql')

SENGRID_API_KEY= key of api sengrid here
SENGRID_EMAIL=   it is necessary that your email is verified in sengrid. else cannot will work 


_________________________________________________________________________________________________________________
IT IS NECESSARY THAT THE TABLES EXISTS ON THE DATABASE, IF YOUR WANT TO SEE THE SCHEMA, PLEASE VISIT THE ROUTE MODULES/*/INFRASTRUCTURE/SCHEMAS/SEQUELIZE.TS

TABLES:

CREATE TABLE `temporalemails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `code` int DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

___________________________________________________________________________
PLEASE BEFORE TO RUN THE PROJECT, EXECUTE THE NEXT COMMANDS

npm install
npm start


for run image in docker 

docker build -t examen .
docker run -it -p 4000:8080 examen



for running test execute the next command

npm test