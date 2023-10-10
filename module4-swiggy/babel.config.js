module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runTIme: "automatic" }], //help the converting jsx code to test library
  ],
};
