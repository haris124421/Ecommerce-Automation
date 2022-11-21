import testData from "../../fixtures/test_data/register.json"
describe('Test Cases for API Automation', function() {


    it('TC-01 Get single user API', function() {
        cy.request({
            method: 'GET',
            url: Cypress.env('apiURL')+"/users/"+testData.user_id,
            failOnStatusCode: false
        }).then(function(resp) {
            if(resp.status==200) {
                cy.log('response is ', resp.body.data.first_name)
            }
            else if(resp.status=404){
                cy.log('response is ', resp.body)
                expect(resp.body).that.is.empty // chai assertion
            }
        })

    })
})