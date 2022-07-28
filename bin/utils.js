const colors = require('colors');

colors.enable();

const showUsage = `
Options:
      --version  Show version number                                   [boolean]
  -p, --popular  List the commands to compile in the 10 most popular languages
                 ​​according to the stack overflow ranking.📊
                 You can see it here👇:
                 https://survey.stackoverflow.co/2022/#technology🔗    [boolean]
  -c, --current  List the commands to compile the files it finds in your current
                 directory.📂                                          [boolean]
      --help     Show help                                             [boolean]`;

function parseSentence(words) {
    var sentence = "";
    for(var i = 1; i < words.length; i++) {
        sentence = sentence + words[i] + " ";
    }
}

function showHelp() {
    console.error("\nThis command not exist, See the options".underline.red);
    console.log(showUsage);
}

module.exports = { showHelp: showHelp, parseSentence: parseSentence };