**CYPRESS TEST AUTOMATION FRAMEWORK**

* Application under test (AUT)
  * demo tricentis webshop: https://demowebshop.tricentis.com/

* Modules & versions:
  * Cypress@9 [v9.7.0]

* Installed components & their commands:
  * Xpath
    * cmd: npm install xpath
    * Add 
      * support > index.js
        * require('cypress-xpath'); 
  * Cucumber BDD
    * cmd: npm install --save-dev cypress-cucumber-preprocessor
    * Add
      * plugins > index.js 
        * const cucumber = require('cypress-cucumber-preprocessor').default
          module.exports = (on, config) => {
              on('file:preprocessor', cucumber())
          })
        }
    * SQLite3
      * cmd: npm install --save-dev sqlite3
      * Add
        * path to db: 
          * const path='C://..//..//.db'
          * on("task", {
              queryDb: (query) => {
              return queryTestDb(query, config);
           }
          })
        * function: 
          * function queryTestDb(sql) {
            let db = new sqlite3.Database(path);
            return new Promise((resolve, reject) => {
            db.all(sql, [], (err, rows) => {
            if(err)
            reject(err);

            else  {
            db.close();
            console.log(rows)
            return resolve(rows);
            }//End else
            });//End db.run
            });
            }