(function () {
    if (undefined === window.sclab) {
        window.sclab = {
            screenOrientation: (orientation) => {
                // No need to implement
            },
            backToIndex: () => {
                // No need to implement
            },
            clickBack: () => {
                // Need overwrite
            }
        }
    }
})()