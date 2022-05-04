const functions = require("./PricingModule.js");

test("Fuel quote 1", () => {
  expect(functions.pricingCalculate(1500, 0.02, 1.5, 0.01, 0.02, 0.1)).toEqual([
    1.695, 2542.5,
  ]);
});

test("Fuel quote 2", () => {
  expect(functions.pricingCalculate(256, 0.02, 1.5, 0.01, 0.03, 0.1)).toEqual([
    1.71, 437.76,
  ]);
});

test("Fuel quote 3", () => {
  expect(functions.pricingCalculate(3000, 0.02, 1.5, 0.01, 0.02, 0.1)).toEqual([
    1.695, 5085.0,
  ]);
});
