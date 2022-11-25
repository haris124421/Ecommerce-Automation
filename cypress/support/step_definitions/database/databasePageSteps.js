import database from "../../../pages/database/database";

Then('I fetch active product from db', () => {
    database.fetchValueFromDb();
})

Then('I fetch data from temp table', () => {
    database.fetchValueFromDb();
})