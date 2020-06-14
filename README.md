# DragDrop, LearnWords

Program proposed as an exercise to work with the Drag & Drop of HTML5.
It has been added different functionalities such as a backend in express, using swagger for documentation and sequelize as ORM.

## How to Start 🚀

+ Just clone this repository 
```
git clone https://github.com/chsanleo/DragDropWords.git
```

+ and install the packages,

```
npm install
```

+ run the migrations to create the database

```
sequelize db:migrate
```

+ populate the database

```
INSERT INTO language (name,abbreviation) VALUES (?,?);
INSERT INTO word (term,idLanguage) VALUES (?,?);
```
 
+ and... WORK.


### TODO 📋

**About the frontEnd**

+ Change the img by text with style.
+ Connect the front with the back.
+ Add a reset button to return to initial state of the words.


**About the back**

+ Create the CRUD for each operation


**About features**

+ Create a User system to storage information about.
+ Create a Choose language System to learn different languages.


## Test the application ⚙️

Turn on the server
```
$ npm start
```

use the swagger API to test each back feature
```
localhost:3000/api-doc
```

use the browser of your choice and with the developer tools test. 

(https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

## Used Tools 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Swagger](https://www.npmjs.com/package/swagger-ui-express) - API docs
* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - API docs
* [sequelize](https://www.npmjs.com/package/sequelize) - ORM
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client


## Author ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)


## License 📄

You can use it without problems, just mention me or contact me for it.


## How to say 'thanks' to me  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to me ;). 
* etc.