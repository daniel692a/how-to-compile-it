const yargs = require('yargs');

const popular = yargs.option("p", {
    alias: "popular",
    describe: "List the commands to compile in the 10 most popular languages ​​according to the stack overflow ranking.📊\nYou can see it here👇:\nhttps://survey.stackoverflow.co/2022/#technology🔗",
    type: "boolean",
    demandOption: false
});

module.exports = {
    popular: popular
};