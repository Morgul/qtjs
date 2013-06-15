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

    describe('at', function()
    {
        it('should return the item specified', function()
        {
            expect(tList.at(0)).toBe("Apples");
            expect(tList.at(5)).toBe("Pineapples");
            expect(tList.at(8)).toBe("Watermelons");
        });

        it('should throw an error when an invalid index is passed', function()
        {
            expect(function(){tList.at(10)}).toThrow();
        });
    });

    describe('clear', function()
    {
        it('should empty the list', function()
        {
            var tmp = ["Cheese", "Hamburger"];
            tmp.clear();

            expect(tmp.length).toBe(0);
        });

        it('should affect all references to the list', function()
        {
            var tmp = ["Cheese", "Hamburger"];
            var tmp2 = { test: tmp };

            tmp.clear();
            expect(tmp2.test.length).toBe(0);
        });

        it('should clear out all properties', function()
        {
            var tmp = ["Cheese", "Hamburger"];
            tmp.clear();

            expect(Object.keys(tmp)).toEqual([]);
        });
    });

    describe('count', function()
    {
        it('should return the number of occurrences of value in the list', function()
        {
            var tmp = ["Cheese", "Hamburger", "Lettuce", "Cheese", "Chicken", "Hamburger", "Cheese"];

            expect(tmp.count("Cheese")).toBe(3);
            expect(tmp.count("Hamburger")).toBe(2);
            expect(tmp.count("Apples")).toBe(0);
        });

        it('should return the length of the list if no value was passed in', function()
        {
            var tmp = ["Cheese", "Hamburger", "Lettuce", "Cheese", "Chicken", "Hamburger", "Cheese"];

            expect(tmp.count()).toBe(7);
        });
    });

    describe('empty', function()
    {
        it('should return true if the list is empty', function()
        {
            var tmp = [];
            expect(tmp.empty()).toBe(true);
        });

        it('should return false if the list is not empty', function()
        {
            expect(tList.empty()).toBe(false);
        });
    });

    describe('endsWith', function()
    {
        it('should return true if the list is not empty, and the last item is value', function()
        {
            var tmp = [];

            expect(tmp.endsWith("Apples")).toBe(false);
            expect(tList.endsWith("Watermelons")).toBe(true);
        });
    });

    describe('first', function()
    {
        it('should return the first item from the list', function()
        {
            expect(tList.first()).toBe("Apples");
        });
    });

    describe('insert', function()
    {
        it('should insert value in the specified position in the list', function()
        {
            var tmp = ["Cheese", "Hamburger"];

            tmp.insert(1, "Lettuce");

            expect(tmp).toEqual(["Cheese", "Lettuce", "Hamburger"]);
        });
    });

    describe('isEmpty', function()
    {
        it('should return true if the list is empty', function()
        {
            var tmp = [];
            expect(tmp.empty()).toBe(true);
        });

        it('should return false if the list is not empty', function()
        {
            expect(tList.empty()).toBe(false);
        });
    });

    describe('last', function()
    {
        it('should return the last item of the list', function()
        {
            expect(tList.last()).toBe("Watermelons")
        });
    });

    describe('mid', function()
    {
        it('should return a list whose elements are copied from this list, starting at position pos', function()
        {
            expect(tList.mid(4)).toEqual(["Cherries", "Pineapples", "Oranges", "Blueberries", "Watermelons"]);
        });

        it('should return only `length` elements from `pos` if length is passed, or other than -1.', function()
        {
            expect(tList.mid(4, -1)).toEqual(["Cherries", "Pineapples", "Oranges", "Blueberries", "Watermelons"]);
            expect(tList.mid(4, 3)).toEqual(["Cherries", "Pineapples", "Oranges"]);
        });
    });

    describe('move', function()
    {
        it('should move an item from position `from` to position `to`', function()
        {
            var tmp = ["Cheese", "Hamburger", "Lettuce"];
            tmp.move(1, 2);

            expect(tmp).toEqual(["Cheese", "Lettuce", "Hamburger"]);
        });
    });

    describe('prepend', function()
    {
        it('should add `value` to the front of the list.', function()
        {
            var tmp = ["Hamburger", "Lettuce"];
            tmp.prepend("Cheese");

            var tmp2 = [];
            tmp2.prepend("Moose");

            expect(tmp).toEqual(["Cheese", "Hamburger", "Lettuce"]);
            expect(tmp2).toEqual(["Moose"]);
        });
    });

    describe('removeAll', function()
    {
        it('should remove all instances of `value` from the list', function()
        {
            var tmp = ["Cheese", "Hamburger", "Lettuce", "Cheese", "Chicken", "Hamburger", "Cheese"];
            tmp.removeAll("Cheese");

            expect(tmp).toEqual(["Hamburger", "Lettuce", "Chicken", "Hamburger"]);
        });
    });

    /*

     describe('', function()
     {
         it('', function()
         {

         });
     });

     */
});

// ---------------------------------------------------------------------------------------------------------------------