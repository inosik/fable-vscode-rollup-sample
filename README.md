# Example VS Code Extension with Fable

This is the [Word Count example][example] build with [Fable][fable-home]. It was cloned from [acormier/vscode-fable-sample][upstream] and modified to work with the .NET SDK 3 and later, Rollup instead of Webpack and Fable 3.

  [example]: https://code.visualstudio.com/docs/extensions/example-word-count
  [fable-home]: http://fable.io/
  [upstream]: https://github.com/acormier/vscode-fable-sample

## Getting Started

Run the following commands:

``` shell
# Restore .NET tools
dotnet tool restore
# Restore JavaScript packages
npm install
```

Now, open VS Code and hit <kbd>F5</kbd> to start another instance of VS Code. This experimental instance will have the extension loaded and the debugger attached to it. When starting the "Launch Extension" configuration, VS Code will run the `build` NPM script, which will transpile and bundle the source code and write the resulting JavaScript code to the `out/` directory.

## TODO

- Get the debugger to work with F# code

  When setting breakpoints in F# code, the execution stops at the correct location, *but the editor jumps to the transpiled JavaScript code*. Breakpoints in ES2015 code, as seen in the `src/formatter.js` file, work correctly.

- Start Rollup in watch mode

  That would allow editing the source code and simply reloading the VS Code extension host to see the changes.
