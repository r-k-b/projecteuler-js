(function () {
    window.docReady = function (callback) {
        if (document.readyState == "complete" || document.readyState == "loaded") {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }
})();
