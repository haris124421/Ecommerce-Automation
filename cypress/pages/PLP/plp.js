class plp {
    static iGoToProductDetailPage() {
        cy.get('.product-title > a').eq(0).click();
    }
}

export default plp;