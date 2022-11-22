/// <refernce types="cypress" />
describe('Test Suite for API Automation', function () {

    it('TC-01 LOGIN API', function () {
        //POST API CALL
        cy.login(); //cy.login is cypress custom command its implemententation can been seen in Support/Command.js file
        cy.visit('https://demowebshop.tricentis.com/') //access the tricentis site and check user should be automatically logged in
        cy.get('.header-links > ul > :nth-child(1) > .account')
            .should('have.text', 'test@nomail.com') //assertion to check logged-in state
    })

    //////////////////// For below Apis we used sample apis from https://reqres.in/ ////////////////////
    it('TC-02 GET API call', function () {
        // GET API CALL
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false

        }).then(function (response) {

            if (response.status == 200) {
                cy.log(response.body.data)
                let fname = response.body.data.first_name //store the response in variable
                cy.log(fname) // logging the variable
                expect(fname).to.exist //assertion to check that first name should exist
                assert.isNotNull(fname) //assertion to check that first name should not be null
                assert.isString(fname) //assertion to check first name field should be type: string
                // similary for the rest of the object properties we can put assertions as per our need
            }
            else if (response.status == 404) {
                //will cater the scenarios as per requirement
                expect(response.body).that.is.empty
            }
        })
    })

    it('TC-03 PUT API CALL', function () {
        // PUT API CALL
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/user/2',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        }).then(function (response) {
            if (response.status == 200) {
                cy.log(response.body)
                expect(response.body.job).to.eq('zion resident')
                assert.isString(response.body.job)
                expect(response.body.name).to.eq('morpheus')
                assert.isString(response.body.name)
            }
        })

    })

    it('TC-04 DELETE API CALL', function () {
        //DELETE API CALL
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false

        }).then(function (response) {
            expect(response.status).to.eq(204)
        })
    })

})