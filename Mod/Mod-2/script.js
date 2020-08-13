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
    ext.url = function(text){
       window.open("Project said\n" + text);
    };
    ext.talk = function(text){
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    };
    ext.html = function(text){
     var myWindow;
     myWindow = window.open("", "myWindow", "width=200,height=100");
     myWindow.document.write(text)
    };
    ext.ask = function(text){
        return window.prompt("Project asking for input\n" + text);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Print Page','print'],
            [' ', 'Window popup %s','popup'],
            [' ', 'Open URL %s','url'],
            [' ', 'Talk %s','talk'],
            [' ', 'HTML %s','html'],
            ['r', 'Ask %s','ask'],
        ],
    url: 'https://daniel4-scratch.github.io/ScratchX-Mods/Mod/Mod-2/',
    };

    // Register the extension
    ScratchExtensions.register('JavaScript Addon PRO', descriptor, ext);
})({});
