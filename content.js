chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      quasify();
    }
  }
);

function quasify() {
  var $div = $('<div>');
  $div.css({
    height: window.innerHeight,
    width: window.innerWidth,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    color: 'white',
    fontFamily: 'monospace',
    fontSize:'12px',
    backgroundColor: '#000',
  });

  var $qvaz = $('<div>');
  $qvaz.css({
    margin: '0 auto',
    width: '577px',
  });

  $div.html($qvaz);

  function printQuaz() {
    printRows($qvaz, qvaz, 40, 100);
  }

  $('body').append($div.hide());

  $('body > div').fadeOut(3000)
  $div.fadeIn(2000, printQuaz);

  pink(100, 10000);

  setTimeout(function() {
    $qvaz.fadeOut(2000, function() {
      $qvaz.remove()
      $quazHowl = $('<div>');
      $quazHowl.css({
        whiteSpace: 'pre',
        fontSize: '25px',
        width: '940px',
        margin: '0 auto',
        paddingTop: '100px',
      })
      $div.html($quazHowl);
      printRows($quazHowl, quazHowl, 70, 2600);
    });
  }, 12000);
}

function printRows($container, arr, letterSpeed, rowSpeed, cb) {
  var rowSpeedAcc = 0;
  $.each(arr, function(rowIndex, row) {
    rowSpeedAcc += rowSpeed * Math.random() * 2;
    var $rowDiv = $('<div>');
    $rowDiv.css({
      fontFamily: 'monospace',
    })
    $container.append($rowDiv);
    setTimeout(function() {
      var letterSpeedAcc = 0;
      for (var i = 0; i < row.length ; i++) {
        (function(_i) {
          letterSpeedAcc += letterSpeed * Math.random() * 2;
          setTimeout(function() {
            var ltr = row.slice(_i, _i + 1);
            $rowDiv.append(ltr);

            var isLastLetter = _i === (row.length - 1);
            var isLastRow = rowIndex === (arr.length - 1);
            if (isLastLetter && isLastRow) {
              if (cb) cb();
            }
          }, letterSpeedAcc);
        })(i)
      }
    }, rowSpeedAcc);
  });
}


var qvaz = [
  "................................................................................",
  "................................................................................",
  "..............................,,,...............................................",
  "............................:::::...............................................",
  "...........................,:::::...............,,,,............................",
  "...........................::::::...............,,,,............................",
  "...........................::::::...............,,,,,,..........................",
  ".........................,,::::::...............,,,,,,..........................",
  ".........................::~~~~~:...............,,,,,,,,........................",
  ".........................::~~~~~~...............,,,,,,,,........................",
  ".........................~~~~~~~:...............,,,,,,,,........................",
  "........................,~~~~~~~~...............,,,,,,,,........................",
  "........................,~~~~~~~~...............:,,,,,,,........................",
  "........................:===~~==~...............::::,,:,........................",
  "........................~=======~.............,,~~~:::::,.......................",
  "........................~++=====~.............::~~~:::~~,.......................",
  "........................~+++=====::...........::=~~~::~~,.......................",
  "........................~+++===+=::...........~~=~~~~~~~:.......................",
  "........................:+++==++=::...........~~===~~~~~,.......................",
  ".........................==+++++=::...........~~=~~~==~~,.......................",
  ".........................::=~~===~~,............,:::::~~,.......................",
  "...........................:~~~~~,,..............,,:::::........................",
  "...........................,~~~~:::,....,::.....,:::::,,........................",
  "...........................:~~~~~==~....,~~,,,...:::::::........................",
  "...........................~=====~~,....,::...~~~~~~~~~~,.......................",
  "........................,~~======::......,,.,,::~~~~~~~~:.......................",
  "......................,,:~~=++==:........,,.:::::==~~~==~.......................",
  "......................,,~==+==::.::...,,,::,..:::~~=====~::.....................",
  "......................~~===+~~:::,,~,,..,,,.,,~~:~~+=====::.....................",
  "......................~~+++=::,,+~~~::..:::,::===::~==++=~~.,,..................",
  ".................,,.,,+++++=..==+==:,,..:~~.~~=====~++++===:....................",
  ".................,,.::+++++=,,++?==.::~~~~~~~~::===~==+++++:....................",
  "................,,,.::?????=,,+++::,~~===~~=~~,,~+++++??+++:....................",
  "..............,,,,,,....,..=,,+++:::~~=====~~~==~+++==+++::,,,..................",
  "............,,,,,,,,,,,,,,,...=++:::,,..,,,,::~~~==+??++...,,,..................",
  "............,,,,,,,,,,,,,,,,..+++:::::~~::::::~~=+++++::,,,,,,..............,,..",
  "............,,,,,,,,,,,,,,,,..==+::~::~~:::~~~~~=+++~~..,,,,,,..............,,,,",
  "............,,,,,,,,,,,,,,,,..:~+~~~::~~=~~~::===++=::,,,,,,,,.............,,,,,",
  "................,,,,,,,,,,,.,,~~+~~:~~~~~~~~~~~~=++=::,,,,,,...............,,,,,",
  "............,,,,,,,,,,,,,,,.,,::===,~~~~:==+++===++~,,,,,,,,...............,,,,,",
  ".........,,,,,,,,,,,,,,,,,,,,,:::==,....,~~:::===++=::..,,,,,,.............,,,,,",
  ".........,,,,,,,,,,,,,,,,,,,..:::~~:..~~=~~~~~~~===~::,,.,,,...............,,,,,",
  "...........,,,,,,,,,,,,,,,,:,,,,::::,,::======+++++=~~,,.,,,................,,,,",
  "........,,,...,,,,,,,,,,,..,,,..,::.~~++=++=~~==+===~~..,..,...............,,,,,",
  "........,,,,,,,,,,,,,,,,,,,...,,,,,~~~==~==????????=::,,,,,................,,,,,",
  "...,,,...........,,,,,,,,,,.....,,,,~~::,,,=?????==:,,,,,,,,................,,,,",
  "......,,,,,,,,,,,..,,,,,,,,.....,,,,,,,,,:::++??+==:,,,,,,,,................,,,,",
  "........,,,,,,,,,,,,,,..........,,,,,,......::~~:::,,,,,,,,,..................,,",
  ".........,,,,,,,,,,,..........,,,,,,.....,,.::~~:,,,,,,,,,,,................,,..",
  ".,,,,,,,....,,,,,,,,,,......::::.,,,,,.....,.....,,,,,,,,,,,....................",
  ".,,,,,,,....,,,,,,,,,,......::::.,,,,,.....,.....,,,,,,,,,,,...................."
];

function pink(fadeInIncr, startFadeOut) {
  var audioContext = new AudioContext,
      bufferSize = 4096,
      gain = 0;

  pinkNoise = (function() {
    var b0, b1, b2, b3, b4, b5, b6,
        node = audioContext.createScriptProcessor(bufferSize, 1, 1);

    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
    node.onaudioprocess = function(e) {
      var output = e.outputBuffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) {
        var white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11; // (roughly) compensate for gain
        b6 = white * 0.115926;
      }
    }
    return node;
  })();

  var gainNode = audioContext.createGain()
  gainNode.gain.value = 0;

  pinkNoise.connect(gainNode);
  gainNode.connect(audioContext.destination);

  var rampToValue = 0.25;
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(rampToValue, audioContext.currentTime + 12.0);

  setTimeout(function() {
    gainNode.gain.linearRampToValueAtTime(rampToValue, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 3.0);
  }, 12000);
}

var quazHowl = [
  "Quas! Latitude! Myth! Beauty! Vessels and ever-flowing",
  "    spice! Children resonating behind curtains! Girls and boys",
  "    digging in tunnels! Old men laughing in the parks!",
  "Quaz! Qvas! Daydream of Qvaz! Kw'az the anomalous!",
  "    Spiritual Qwas! ?uass the arbiter of no one!",
  "Qwahs the intangible Discretion! Quaz the crosswind",
  "    leeway mailhouse and harbinger of tomorrows! Qu'ass",
  "    whose structures are freedom! Qvass the vast stone of",
  "    lore! Kv'ass who shunned governments!",
  "Quahss whose mind is pure imagination! Qu'wass whose blood is",
  "    flowing! ?vass whose fingers are ten weaving looms!",
  "    Qu'az whose breast is a herbivore dynamo! Kwaa'asss whose",
  "    ears are a tuning fork!",
];
