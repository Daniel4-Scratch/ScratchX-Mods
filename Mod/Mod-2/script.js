(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 1, msg: 'Beta Mode (Not ready for public)'};
    };

    ext.print = function() {
       print();
    };
    ext.popup = function(text) {
       alert(text);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Print Page','print'],
            [' ', 'Window popup %s','popup'],
        ],
    url: 'https://daniel4-scratch.github.io/ScratchX-Mods/Mod/Mod-2/',
    };

    // Register the extension
    ScratchExtensions.register('Mod2', descriptor, ext);
})({});
