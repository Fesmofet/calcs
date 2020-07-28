var logic = require("../src/helpers/helpers");
var expect = require('chai').expect;

describe("converter testing", function () {
    describe("test wrong inputs", function () {
        it('should return Invalid input input is empty', function () {
            expect("Invalid input").to.equal(logic.calculate("", "meters", "meters"));
        });

        it('should return Invalid input input is less then 0', function () {
            expect("Invalid input").to.equal(logic.calculate("-10", "meters", "meters"));
        });
    }),
        describe("test input in meter", function () {
            it('should return 1 meter if input is 1 meter', function () {
                expect(1).to.equal(logic.calculate(1, "meters", "meters"));
            });

            it('should return 3.28084 foots if input is 1 meter', function () {
                expect(3.28084).to.equal(logic.calculate(1, "meters", "foot"));
            });

            it('should return 0.000621371 miles if input is 1 meter', function () {
                expect(0.000621371).to.equal(logic.calculate(1, "meters", "miles"));
            });

            it('should return 1.09361 yard if input is 1 meter', function () {
                expect(1.09361).to.equal(logic.calculate(1, "meters", "yard"));
            });
        }),
        describe("test input in yards", function () {
            it('should return 1 yard if input is 1 yard', function () {
                expect(1).to.equal(logic.calculate(1, "yard", "yard"));
            });

            it('should return 0.000568182 miles if input is 1 yard', function () {
                expect(0.000568182).to.equal(logic.calculate(1, "yard", "miles"));
            });

            it('should return 3 foot if input is 1 yard', function () {
                expect(3).to.equal(logic.calculate(1, "yard", "foot"));
            });

            it('should return 0.9144 meters if input is 1 yard', function () {
                expect(0.9144).to.equal(logic.calculate(1, "yard", "meters"));
            });
        }),
        describe("test input in miles", function () {
            it('should return 1 miles if input is 1 miles', function () {
                expect(1).to.equal(logic.calculate(1, "miles", "miles"));
            });

            it('should return 5280 foots if input is 1 miles', function () {
                expect(5280).to.equal(logic.calculate(1, "miles", "foot"));
            });

            it('should return 1609 meters if input is 1 miles', function () {
                expect(1609).to.equal(logic.calculate(1, "miles", "meters"));
            });

            it('should return 1760 yard if input is 1 miles', function () {
                expect(1760).to.equal(logic.calculate(1, "miles", "yard"));
            });
        }),
        describe("test input in miles", function () {
            it('should return 1 foot if input is 1 foot', function () {
                expect(1).to.equal(logic.calculate(1, "foot", "foot"));
            });

            it('should return 0.3333 yard if input is 1 foot', function () {
                expect(0.3333).to.equal(logic.calculate(1, "foot", "yard"));
            });

            it('should return 0.0001894 miles if input is 1 foot', function () {
                expect(0.0001894).to.equal(logic.calculate(1, "foot", "miles"));
            });

            it('should return 0.3048 meters if input is 1 foot', function () {
                expect(0.3048).to.equal(logic.calculate(1, "foot", "meters"));
            });
        })
});
