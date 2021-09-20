var fs = require("fs");

function readFiles(dirname, onFileContent) {
  const filenames = fs.readdirSync(dirname);
  filenames.forEach(function(filename) {
    if (!filename.endsWith("json") || filename === "template.json") {
      return;
    }
    fs.readFile(dirname + filename, "utf-8", function(err, content) {
      if (err) {
        throw new Error(err);
      }
      onFileContent(filename, content);
    });
  });
}

function check(game, roundName) {
  if (game.clues.length !== 7) {
    throw new Error("There must be 7 clues");
  }
  game.clues.forEach(clue => {
    if (typeof clue.question !== "string") {
      throw new Error("Question is not a string");
    }
    if (clue.question.length === 0) {
      throw new Error("Question is empty");
    }
    if (Number.isNaN(clue.answer)) {
      throw new Error("Answer is not a number");
    }
  });
}

readFiles("./", function(filename, content) {
  console.log("Testing file " + filename);
  const game = JSON.parse(content);
  check(game);
});
