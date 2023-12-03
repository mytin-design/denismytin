module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};


//Object container for languages for each action
//target container from server and display appropriate content
languages = [
  {mainForWeb: "Javascript"},
  {mainForDatabase: "Php"},
  {mainForSoftware: "C++"},
  {mainForDesign: ["Bootstrap", "CSS"]},
]