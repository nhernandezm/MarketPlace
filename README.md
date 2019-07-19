# MarketPlace

MarketPlace is a litle application to buy products, it has two master for to add new categories and products associate a one category.

It can to search products by text or for a category, so you can add and remove products a to shopping cart y to see detail.

### Technology

The aplications is create with Node.js (12.6.0) and Mysql(10.1.16-MariaDB) In the Backend and AngularJS (1.7.8), Bootstrap(Version 4.3) and jquery (3.4.1) in the Frontend.

The Backend are a set of API which are consumed by the frontend by HTTP.

### Configuration

After of download the repositorio set the configurations:
#### Backend
1) Go to the file src\setting.js and set data of connection a to database(MySql) and port listening the server NodeJs

#### Frontend
2) Go to the file web\app.js and set the server key, put the server ip and port

#### Data Base
3) Go to the file src\database\db.sql and execute en mysql to create the database that use the application

### Installation
Create a folder with name your want and go in to folder:

$ git clone https://github.com/nhernandezm/MarketPlace.git .

$ npm install (Install dependences)

$  npm run dev (To start node server)

Go to browser 
