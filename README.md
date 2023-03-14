# Scratch JSON

 This Scratch 3.0 custom extension adds blocks to access and controls the JSON.

 Try it:  
 *CAUTION: Do not use this URL to create a project directly.*  
 `https://bill96012.github.io/scratch-json-extension/scratch-json.js`  
 <https://turbowarp.org/editor?extension=https://bill96012.github.io/scratch-json-extension/scratch-json.js>

## Version

 Due to any possible bugs and various uncertainties, there can be any breaking changes in this extension.  
 To protect projects from breaking changes, use the file in the "version" folder for the project instead.  
 Every file in the folder is named by using Semantic Versioning 2.0.0.  
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

### Insert (VALUE) at (INDEX) of Array (PATH) from (JSON)

 *(added from v1.2.0)*  
 Reporter block.  
 Returns the (JSON) which (VALUE) has inserted at (INDEX) of (PATH).  
 Note that the (INDEX) is started from `1`, not `0`.

### Delete (INDEX) of Array (PATH) from (JSON)

 *(added from v1.2.0)*  
 Reporter block.  
 Similar to the "Delete (PATH) from (JSON)" block but only for array and removes (INDEX) completely.  
 Note that the (INDEX) is started from `1`, not `0`.

### Delete all of Array (PATH) from (JSON)

 *(added from v1.2.0)*  
 Reporter block.  
 Similar to the "Delete (INDEX) of Array (PATH) from (JSON)" block but removes all items instead.  

### Length of Array (PATH) from (JSON)

 *(added from v1.1.0)*  
 Reporter block.  
 Returns the length of the array (PATH) in (JSON), return "0" if (PATH) is not an array.

### (JSON) has (PATH) ?

 Boolean block.  
 Returns "true" if (JSON) has (PATH), else "false".  
 Note that the block is only for checking (PATH) exists, not for keyword searching.

### (PATH) from (JSON) is Array?

 *(added from v1.2.0)*  
 Boolean block.  
 Returns "true" if (PATH) in (JSON) is array, else "false".  

### (INPUT) is Valid JSON?

 Boolean block.  
 Returns "true" if (INPUT) is valid JSON, else "false".

### (INPUT1) . (INPUT2)

 *(added from v1.2.0)*  
 Reporter block.  
 Returns "(INPUT1)`.`(INPUT2)", if one of the inputs is empty returns without the ".".

### (INPUT) [ (INDEX) ]

 *(added from v1.2.0)*  
 Reporter block.  
 Returns "(INPUT)`[`(INDEX)`]`", (INDEX) will filled up with "0" if empty or invalid.

## Path

 The "path" can let you reach the data without stacking blocks.  
 *There are still some blocks that help stack building the path tho.*

 ```text
 a    -> {"a":(...)}
 a.b  -> {"a":{"b":(...)}}
 a[1] -> {"a":[(...),"x",(...)]}
 ```

 `.` - Connects a key after it as a child key that is before it

 ```text
 x.y   -> {"x":{"y":(...)}}
 i.j.k -> {"i":{"j":{"k":(...)}}}
 ```

 `\` - Escape the `.` and `\` after it  
 *Don't forget to use the boolean block "( ) is valid JSON?" to check the escaped key.*

 ```text
 x\.y.z  >> 'x.y'.'z' -> {"x.y":{"z":(...)}}
 i\\\..j >> 'i\.'.'j' -> {"i\.":{"j":(...)}}
 ```

 `[n]` - Points to an item in the array, `n` is a zero-based index and must be an integer

 ```text
 x[1]    -> {"x":[(...),"a",(...)]}
 i[0][2] -> {"i":[[(...),(...),"a",(...)],(...)]}
 ```

 Combining the methods above, it is possible to create a complex path

 ```text
 a.b[0]
 x[9].y[6][0][1].z
 ```
