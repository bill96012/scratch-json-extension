class ScratchJson {
  constructor() {}
  
  getInfo() {
    return {
      id: 'json',
      name: 'JSON',

      menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzZjNmU3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+',
      blockIconURI: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+',

      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [PATH] from [OBJECT]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x.y[0]'
            },
            OBJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          opcode: 'set',
          blockType: Scratch.BlockType.REPORTER,
          text: 'set [PATH] in [OBJECT] to [VALUE]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x.y.z'
            },
            OBJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"x": {"y": [3, 6, 9]}}'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '369'
            }
          }
        },
        {
          opcode: 'delete',
          blockType: Scratch.BlockType.REPORTER,
          text: 'delete [PATH] from [OBJECT]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x.y[2]'
            },
            OBJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          opcode: 'has',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[OBJECT] contains [PATH] ?',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x.y'
            },
            OBJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"x": {"y": [3, 6, 9]}}'
            }
          }
        },
        {
          opcode: 'valid',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[string] is valid JSON?',
          arguments: {
            string: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"x": {"y": [3, 6, 9]}}'
            }
          }
        }
      ]
    };
  }

  get({PATH, OBJECT}) {
    if(PATH == '') {return '';} else {PATH = this._parseJsonPath(PATH);}
    try {
      let result = PATH.reduce((obj, key) => obj[key], JSON.parse(OBJECT));
      return typeof(result) === 'undefined' ? '' : typeof(result) === OBJECT ? JSON.stringify(result) : result;
    } catch {
      return '';
    }
  }

  set({PATH, OBJECT, VALUE}) {
    if(PATH == '') {return '';} else {PATH = this._parseJsonPath(PATH);}
    if(OBJECT == '' || !(this._isJsonString(OBJECT))) {return '';} else {OBJECT = JSON.parse(OBJECT);}
    VALUE = VALUE == '' ? VALUE : isNaN(VALUE) ? this._isJsonString(VALUE) ? JSON.parse(VALUE) : VALUE : Number(VALUE);
    let _object = OBJECT;
    for(let i = 0; i < PATH.length; i++) {
      let _object_path_i = Array.isArray(_object) ? _object[PATH[i]] : Object.keys(_object).includes(PATH[i]) ? _object[PATH[i]] : _object;
      if(_object_path_i == _object || typeof(_object_path_i) === 'undefined' || (!(i == PATH.length - 1) && (!(typeof(_object_path_i) === OBJECT) || (typeof(_object_path_i) === OBJECT && Array.isArray(_object_path_i) && (!(typeof(PATH[i + 1]) === 'number' || Object.keys(_object_path_i).includes(PATH[i + 1])) || typeof(_object_path_i[PATH[i + 1]]) === 'undefined')))) || i == PATH.length - 1) {
        for(let j = PATH.length - 1; j > i; j--) {
          let temp = typeof(PATH[j]) === 'number' ? [] : {};
          temp[PATH[j]] = VALUE;
          VALUE = temp;
        }
        _object[PATH[i]] = VALUE;
        break;
      } else {
        _object = _object_path_i;
      }
    }
    return JSON.stringify(OBJECT);
  }

  delete({PATH, OBJECT}) {
    if(PATH == '') {return '';} else {PATH = this._parseJsonPath(PATH);}
    if(OBJECT == '' || !(this._isJsonString(OBJECT))) {return '';} else {OBJECT = JSON.parse(OBJECT);}
    try {
      let _object = OBJECT;
      for(let i = 0; i < PATH.length - 1; i++) {
        _object = _object[PATH[i]];
      }
      delete _object[PATH[PATH.length - 1]];
    } catch {}
    return JSON.stringify(OBJECT);
  }

  has({PATH, OBJECT}) {
    if(PATH == '') {return '';} else {PATH = this._parseJsonPath(PATH);}
    try {
      let result = PATH.reduce((obj, key) => obj[key], JSON.parse(OBJECT));
      return typeof(result) === 'undefined' ? false : true;
    } catch {
      return false;
    }
  }

  valid({string}) {
    return this._isJsonString(string)
  }


  _isJsonString(string) {
    try {
      JSON.parse(string);
      return true;
    } catch {
      return false;
    }
  }

  _parseJsonPath(PATH) {
    PATH = PATH.match(/(\\.|[^\.])+/g);
    PATH.forEach((string,index,array) => {array[index] = string.replace(/\\(?=\.)/g, '').replace(/\\\\/g, '\\');});
    let _path = [];
    PATH.forEach((string) => {
      if(/(?:\[[0-9]+\])+$/g.test(string)) {
        if(!(string.replace(/(?:\[[0-9]+\])+$/g, '') == '')) {_path[_path.length] = string.replace(/(?:\[[0-9]+\])+$/g, '');}
        string.match(/(?:\[[0-9]+\])+$/g)[0].match(/\[([0-9]+)\]/g).forEach((string) => {
          _path[_path.length] = Number(string.replace(/\[([0-9]+)\]/g, '$1'));
        });
      } else {
        _path[_path.length] = string;
      }
    });
    PATH = _path;
    return PATH;
  }
}

Scratch.extensions.register(new ScratchJson())