describe("solution", function () {

    beforeEach(function () {
    });

    it("should get the example correct", function () {
        expect(
            solution.getMultiples({rangeEnd: 10, multiples: [3, 5]})
        ).toEqual(
            [3, 5, 6, 9]
        );

        expect(solution.getAnswerFor(10)).toBe(23);
    });

    it("should be able to sum the values in an array", function () {
        expect(
            solution.getSum([1,2,3])
        ).toBe(
            6
        );
    })

});
