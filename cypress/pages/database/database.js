import pageObjectsDashboard from "../../fixtures/page_objects/dashboard.json"
import testDataProducts from "../../fixtures/test_data/products.json"
let value = "value";

class database {
    static fetchValueFromDb() {
        cy.task(
            "queryTestDB",
            "SELECT pid FROM tempTable;"
        ).then(function (recordset) {
            const rec = recordset;
            const results = Object.values(rec[0]);
            cy.log(results[0]);
        })
    }

    static getProductFromDB(productType) {
        if (productType == "in_stock")
            this.searchForInStockProduct();
        else if (productType == "low in stock")
            this.searchForLowInStockProduct();
        else
            this.searchForDefaultProduct();
    }

    static searchForInStockProduct() {
        value = cy.task(
            "queryTestDB",
            "SELECT product_name FROM tbl_product WHERE qty_in_stock > 80 AND status = 'Active' LIMIT 1"
        ).then(function (recordset) {
            if (recordset == "") {
                cy.get(pageObjectsDashboard.field_search).clear().type(`${testDataProducts.default_product}{enter}`);
            } else {
                const results = Object.values(recordset[0])
                value = results[0]
                cy.get(pageObjectsDashboard.field_search).clear().type(`${value}{enter}`);
            }
        })
    }

    static searchForLowInStockProduct() {
        value = cy.task(
            "queryTestDB",
            "SELECT product_name FROM tbl_product WHERE qty_in_stock < 80 AND status = 'Active' LIMIT 1"
        ).then(function (recordset) {
            const results = Object.values(recordset[0])
            value = results[0]
            cy.get(pageObjectsDashboard.field_search).clear().type(`${value}{enter}`);
        })
    }

    static searchForDefaultProduct() {
        value = cy.task(
            "queryTestDB",
            "SELECT product_name FROM tbl_product WHERE qty_in_stock AND status = 'Default' LIMIT 1"
        ).then(function (recordset) {
            if (recordset == "") {
                cy.get(pageObjectsDashboard.field_search).clear().type(`${testDataProducts.default_product}{enter}`);
            } else {
                const results = Object.values(recordset[0])
                value = results[0]
                cy.get(pageObjectsDashboard.field_search).clear().type(`${value}{enter}`);
            }
        })
    }
}

export default database;