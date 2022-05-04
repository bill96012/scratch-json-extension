class ScratchJson {
  constructor() {}
  
  getInfo() {
    return {
      "id": "json",
      "name": "JSON",
      "blocks": [
        {
          "opcode": "get",
          "blockType": Scratch.BlockType.REPORTER,
          "text": "get [path] from [object]",
          "arguments": {
            "path": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "x.y[0]"
            },
            "object": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          "opcode": "set",
          "blockType": Scratch.BlockType.REPORTER,
          "text": "set [path] in [object] to [value]",
          "arguments": {
            "path": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "x.y.z"
            },
            "object": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '{"x": {"y": [3, 6, 9]}}'
            },
            "value": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '369'
            }
          }
        },
        {
          "opcode": "delete",
          "blockType": Scratch.BlockType.REPORTER,
          "text": "delete [path] from [object]",
          "arguments": {
            "path": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "x.y[2]"
            },
            "object": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          "opcode": "has",
          "blockType": Scratch.BlockType.BOOLEAN,
          "text": "[object] contains [path] ?",
          "arguments": {
            "path": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "x.y"
            },
            "object": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          "opcode": "valid",
          "blockType": Scratch.BlockType.BOOLEAN,
          "text": "[string] is valid JSON?",
          "arguments": {
            "string": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": '{"x": {"y": [3, 6, 9]}}'
            }
          }
        }
      ],
    };
  }

  get({path, object}) {
    path = this._parseJsonPath(path);
    try {
      let result = path.reduce((obj, key) => obj[key], JSON.parse(object));
      return typeof(result) === "undefined" ? "" : typeof(result) === "object" ? JSON.stringify(result) : result
    } catch {return ""}
  }

  set({path, object, value}) {
    path = this._parseJsonPath(path);
    object = JSON.parse(object);
    value = isNaN(value) ? this._isJsonString(value) ? JSON.parse(value) : value : Number(value);
    let _object = object;
    for(let i = 0; i < path.length; i++) {
      let _object_temp = Array.isArray(_object) ? _object[path[i]] : Object.keys(_object).includes(path[i]) ? _object[path[i]] : _object;
      if(_object_temp == _object || typeof(_object_temp) === "undefined" || (!(i == path.length - 1) && (!(typeof(_object_temp) === "object") || (typeof(_object_temp) === "object" && Array.isArray(_object_temp) && !(Object.keys(_object_temp).includes(path[i + 1]))))) || i == path.length - 1) {
        for(let j = path.length - 1; j > i; j--) {
          let temp = typeof(path[j]) === "number" ? [] : {};
          temp[path[j]] = value;
          value = temp;
        }
        let temp;
        temp = _object;
        temp[path[i]] = value;
        break;
      } else {_object = _object_temp;}
    }
    return JSON.stringify(object);
  }

  delete({path, object}) {
    path = this._parseJsonPath(path);
    object = JSON.parse(object);
    let _object = object;
    for(let i = 0; i < path.length - 1; i++) {
      _object = _object[path[i]];
    }
    delete _object[path[path.length - 1]];
    return JSON.stringify(object);
  }

  has({path, object}) {
    path = this._parseJsonPath(path);
    try {
      let result = path.reduce((obj, key) => obj[key], JSON.parse(object));
      return typeof(result) === "undefined" ? false : true
    } catch {return false}
  }

  valid({string}) {
    return this._isJsonString(string)
  }


  _isJsonString(string) {
    try {JSON.parse(string); return true} catch {return false}
  }

  _parseJsonPath(path) {
    path = path.match(/(\\.|[^\.])+/g);
    path.forEach((string,index,array) => {array[index] = string.replace(/\\(?!\\)/g, "");});
    let path_temp = [];
    path.forEach((string) => {
      if(/(?:\[[0-9]+\])+$/g.test(string)) {
        if(!(string.replace(/(?:\[[0-9]+\])+$/g, "") == "")) {path_temp[path_temp.length] = string.replace(/(?:\[[0-9]+\])+$/g, "");}
        string.match(/(?:\[[0-9]+\])+$/g)[0].match(/\[([0-9]+)\]/g).forEach((string) => {
          path_temp[path_temp.length] = Number(string.replace(/\[([0-9]+)\]/g, "$1"));
        });
      } else {path_temp[path_temp.length] = string;}
    });
    path = path_temp;
    return path
  }
}

Scratch.extensions.register(new ScratchJson())