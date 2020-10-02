((ext) ->
  # Cleanup function when the extension is unloaded

  ext._shutdown = ->

  # Status reporting code
  # Use this to report missing hardware, plugin or unsupported browser

  ext._getStatus = ->
    {
      status: 1
      msg: 'Beta Mode (Not ready for public)'
    }

  ext.print = ->
    print()
    return

  ext.popup = (text) ->
    alert text
    return

  ext.url = (text) ->
    window.open 'Project said\n' + text
    return

  ext.talk = (text) ->
    msg = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak msg
    return

  ext.html = (text) ->
    myWindow = undefined
    myWindow = window.open('', 'myWindow', 'width=200,height=100')
    myWindow.document.write text
    return

  ext.ask = (text) ->
    window.prompt 'Project asking for input\n' + text

  ext.ask2 = (text) ->
    window.confirm text

  # Block and block menu descriptions
  descriptor = 
    blocks: [
      [
        ' '
        'Print Page'
        'print'
      ]
      [
        ' '
        'Window popup %s'
        'popup'
      ]
      [
        ' '
        'Open URL %s'
        'url'
      ]
      [
        ' '
        'Talk %s'
        'talk'
      ]
      [
        ' '
        'HTML %s'
        'html'
      ]
      [
        'r'
        'Ask %s'
        'ask'
      ]
      [
        'b'
        'Ask %s'
        'ask2'
      ]
    ]
    url: 'https://daniel4-scratch.github.io/ScratchX-Mods/Mod/Mod-2/'
  # Register the extension
  ScratchExtensions.register 'JavaScript Addon PRO', descriptor, ext
  return
) {}
