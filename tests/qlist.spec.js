// ---------------------------------------------------------------------------------------------------------------------
// Unit tests for QList API
//
// @module qlist.spec.js
// ---------------------------------------------------------------------------------------------------------------------

describe('QList API', function()
{
    var tList;
    beforeEach(function()
    {
        tList =  [
            "Apples", "Bannanas", "Limes", "Lemons", "Cherries", "Pineapples", "Oranges", "Blueberries", "Watermelons"
        ];
    });

    describe('append', function()
    {
        it('should add items to the end of the list', function()
        {
            var tmp = ["Cheese"];
            tmp.append("Hamburger");

            expect(tmp).toEqual(["Cheese", "Hamburger"]);
        });
    });
});

// ---------------------------------------------------------------------------------------------------------------------