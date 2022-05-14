# Scratch JSON

 `https://bill96012.github.io/scratch-json-extension/scratch-json.js`  

 This Scratch 3.0 custom extension adds blocks to access and controls the JSON.

 Try it:  
 <https://turbowarp.org/editor?extension=https://bill96012.github.io/scratch-json-extension/scratch-json.js>

## IMPORTANT

 Here are something you should know before using this extension in a project.

 1. The technical limitations of custom extension
    * (extracted from [TurboWarp Documentation](https://docs.turbowarp.org/development/custom-extensions)) :  
      > Due to technical limitations of the sandbox, every call to a custom extension will stop the current script for a full frame, regardless of turbo mode or run without screen refresh.

 2. The stability of this extension
    > Due to any possible bugs and various uncertainties, I can not promise there will not have any breaking changes affecting the projects, so I created a "version" folder in this repository to store every version of the extension.
    * Use the file in the `version` for a project instead:  
    `https://bill96012.github.io/scratch-json-extension/version/(version).js`

## Blocks

### Get (PATH) from (JSON)

 Reporter block.  
 Returns the value of (PATH) in (JSON).

### Set (PATH) in (JSON) to (VALUE)

 Reporter block.  
 Returns the (JSON) which value of (PATH) has modified to (VALUE).

### Delete (PATH) from (JSON)

 Reporter block.  
 Returns the (JSON) which value of (PATH) has removed.

### (JSON) has (PATH) ?

 Boolean block.  
 Returns "true" if (JSON) has (PATH), else "false".

### (INPUT) is valid JSON?

 Boolean block.  
 Returns "true" if (INPUT) is valid JSON, else "false".

## Notes

### Path

 `.` - Separate all the sub keys

 ```text
 a.b
 x.y.z
 ```

 `\` - Escape the `.` and `\` after it  
 *Don't forget to use the boolean block "( ) is valid JSON?" to check the escaped key.*

```text
a.b      ->  'a',   'b'
x\.y.z   ->  'x.y', 'z'
i\\\..j  ->  'i\.', 'j'
```

 `[n]` - Index of the array, `n` must be an integer

```text
a[0]
x[1][3][5]
```

 It is possible to create a complex path

```text
a.b[0]
x[9].y[0][3].z
```
