module Extension

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import.vscode

[<Emit("$0.match(/\w+/g)")>]
let wordsIn (str : string) : obj = jsNative

let formatCount (n : int) : string = importMember "./formatter"

let countWordsInDocument (d : TextDocument) =
  match wordsIn (d.getText ()) with
  // Don't match with `null` because that generates
  // more code
  | m when isNull m -> 0
  | m -> unbox m?length

let activate (context : ExtensionContext) =
  let sb = window.createStatusBarItem StatusBarAlignment.Left

  let updateStatusBarItem () =
    match window.activeTextEditor with
    | e when isNullOrUndefined e -> sb.hide ()
    | e ->
      let d = e.document
      if d.languageId = "markdown" then
        sb.text <- d |> countWordsInDocument |> formatCount
        sb.show ()
      else
        sb.hide ()

  updateStatusBarItem ()

  let disposables : Disposable [] = [||]
  window.onDidChangeActiveTextEditor $ (updateStatusBarItem, (), disposables) |> ignore
  window.onDidChangeTextEditorSelection $ (updateStatusBarItem, (), disposables) |> ignore
