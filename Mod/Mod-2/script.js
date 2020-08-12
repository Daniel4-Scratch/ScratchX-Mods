(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.alert = function(text) {
        alert(text);
    };
    };
    ext.log = function(text) {
        console.log(text);
        };
    ext.url = function(url) {
        window.open(url);
        };
    var descriptor = {
        blocks: [
            [' ','alert %s','alert'],
        ]
     };
    ScratchExtensions.register('ScratchX Mod2 by Daniel4-Scratch', descriptor, ext);
})({});
