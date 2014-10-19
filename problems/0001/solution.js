var solution = (function () {
    var my = {};

    my.getMultiples = function (settingsIn) {
        /**
         *
         * @type {{rangeStart: number, rangeEnd: number, multiples: number[]}}
         */
        var settings = {
                rangeStart: 0,
                rangeEnd: 10,
                multiples: [3, 5]
            };
        var results = [];
        _.extend(settings, settingsIn);

        range = _.range(settings.rangeStart, settings.rangeEnd);

        _.each(range, function (rangeElem) {
            _.each(settings.multiples, function (multElem) {
                if (rangeElem % multElem === 0) {
                    results.push(rangeElem);
                }
            });
        });

        // remove zeroes
        results = _.reject(results, function (n) {
            return n === 0;
        });

        _.sortBy(results);

        // remove duplicates
        results = _.uniq(results, true);

        return results;
    };

    /**
     *
     * @param {Array<number>} multiples
     * @returns {number}
     */
    my.getSum = function (multiples) {
        return _.reduce(multiples, function (memo, num) {
            return memo + num;
        })
    };

    /**
     *
     * @param {number} rangeEnd
     * @returns {number}
     */
    my.getAnswerFor = function (rangeEnd) {
        return my.getSum(
            my.getMultiples(
                {rangeEnd: rangeEnd}
            )
        );
    };

    docReady(function () {
        var answerSlot = document.querySelectorAll('[data-answer]');
        answerSlot[0].innerHTML = my.getAnswerFor(1000);
    });

    return my;
})();