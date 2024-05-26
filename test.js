test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be ? Yens", function() {
    const { fromDollarToYen } = require('./app.js');

    const Yen = fromDollarToYen(3.5);

    const expected = 3.5 / 1.07 * 156.5;

    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);

})

test("One Yen should be ? Pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const Yen = fromYenToPound(3.5);

    const expected = 1000 / 156.5 * 0.87;

    expect(fromYenToPound(1000)).toBe(5.559105431309905);

})