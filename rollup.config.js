import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import minify from "rollup-plugin-minify-es";
import progress from "rollup-plugin-progress";
import cjs from "rollup-plugin-cjs-es";

export default [
  // cognos-friendly AMD build
  {
    input: "dist/octokat.js",
    output: {
      name: "octokat",
      file: "dist/octokat.amd.js",
      format: "amd"
    },
    external: [],
    plugins: [
      progress({
        clearLine: false // default: true
      }),
      globals(),
      builtins(),
      resolve({
        exclude: ""
      }),
cjs({
      nested: true
    }),      commonjs({
        exclude: "",
        namedExports: {
          //          CodeMirror: "node_modules/codemirror/src/codemirror.js"
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
        }
      }) //,
      //    minify()
    ]
  }
];
