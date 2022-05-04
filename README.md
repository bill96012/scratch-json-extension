# Scratch JSON

 `https://bill96012.github.io/scratch-json-extension/scratch-json.js`  
  
 Try it:  
 <https://turbowarp.org/editor?extension=https://bill96012.github.io/scratch-json-extension/scratch-json.js>

## Notes

### Data Path

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
