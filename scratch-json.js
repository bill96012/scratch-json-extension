class ScratchJson {
  constructor() {}
  
  getInfo() {
    return {
      "id": "json",
      "name": "JSON",

      "menuIconURI": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzZjNmU3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+",
      "blockIconURI": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+",

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
    if(path == "") {return ""} else {path = this._parseJsonPath(path);}
    try {
      let result = path.reduce((obj, key) => obj[key], JSON.parse(object));
      return typeof(result) === "undefined" ? "" : typeof(result) === "object" ? JSON.stringify(result) : result
    } catch {return ""}
  }

  set({path, object, value}) {
    if(path == "") {return ""} else {path = this._parseJsonPath(path);}
    if(object == "" || !(this._isJsonString(object))) {return ""} else {object = JSON.parse(object);}
    value = value == "" ? value : isNaN(value) ? this._isJsonString(value) ? JSON.parse(value) : value : Number(value);
    let _object = object;
    for(let i = 0; i < path.length; i++) {
      let _object_path_i = Array.isArray(_object) ? _object[path[i]] : Object.keys(_object).includes(path[i]) ? _object[path[i]] : _object;
      if(_object_path_i == _object || typeof(_object_path_i) === "undefined" || (!(i == path.length - 1) && (!(typeof(_object_path_i) === "object") || (typeof(_object_path_i) === "object" && Array.isArray(_object_path_i) && (!(typeof(path[i + 1]) === "number" || Object.keys(_object_path_i).includes(path[i + 1])) || typeof(_object_path_i[path[i + 1]]) === "undefined")))) || i == path.length - 1) {
        for(let j = path.length - 1; j > i; j--) {
          let temp = typeof(path[j]) === "number" ? [] : {};
          temp[path[j]] = value;
          value = temp;
        }
        _object[path[i]] = value;
        break;
      } else {_object = _object_path_i;}
    }
    return JSON.stringify(object);
  }

  delete({path, object}) {
    if(path == "") {return ""} else {path = this._parseJsonPath(path);}
    if(object == "" || !(this._isJsonString(object))) {return ""} else {object = JSON.parse(object);}
    try {
      let _object = object;
      for(let i = 0; i < path.length - 1; i++) {
        _object = _object[path[i]];
      }
      delete _object[path[path.length - 1]];
    } catch {}
    return JSON.stringify(object);
  }

  has({path, object}) {
    if(path == "") {return ""} else {path = this._parseJsonPath(path);}
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
    path.forEach((string,index,array) => {array[index] = string.replace(/\\(?=\.)/g, "").replace(/\\\\/g, "\\");});
    let _path = [];
    path.forEach((string) => {
      if(/(?:\[[0-9]+\])+$/g.test(string)) {
        if(!(string.replace(/(?:\[[0-9]+\])+$/g, "") == "")) {_path[_path.length] = string.replace(/(?:\[[0-9]+\])+$/g, "");}
        string.match(/(?:\[[0-9]+\])+$/g)[0].match(/\[([0-9]+)\]/g).forEach((string) => {
          _path[_path.length] = Number(string.replace(/\[([0-9]+)\]/g, "$1"));
        });
      } else {_path[_path.length] = string;}
    });
    path = _path;
    return path
  }
}

Scratch.extensions.register(new ScratchJson())