(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.alert = function(text) {
        alert(text);
    };

    ext.confirm = function(text) {
        return confirm(text);
    };
    ext.prompt = function(text) {
        var output = prompt(text);
        if (!output) {
            return '';
        } else {
            return output;
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
            ['b','confirm %s','confirm'],
            ['r','prompt %s','prompt'],
            [' ','console log %s','log'],
            [' ','open url %s','url'],
        ]
     };
    ScratchExtensions.register('ScratchX Mod1', descriptor, ext);
})({});
