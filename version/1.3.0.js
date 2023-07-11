(function(Scratch) {
  'use strict';
  class ScratchJson {
    getInfo() {
      return {
        id: 'json',
        name: 'JSON',

        menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzZjNmU3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+',
        blockIconURI: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDMxaC0xYTIsMiwwLDAsMS0yLTJWMjRBNiw2LDAsMCwwLDEwLDIwYTYsNiwwLDAsMCwxLjU0LTRWMTFhMiwyLDAsMCwxLDItMmgxYTIsMiwwLDAsMCwwLTRoLTFhNiw2LDAsMCwwLTYsNnY1YTIsMiwwLDAsMS0yLDIsMiwyLDAsMCwwLDAsNCwyLDIsMCwwLDEsMiwydjVhNiw2LDAsMCwwLDYsNmgxYTIsMiwwLDAsMCwwLTRaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS41LDMxaDFhMiwyLDAsMCwwLDItMlYyNEE2LDYsMCwwLDEsMzAsMjBhNiw2LDAsMCwxLTEuNTQtNFYxMWEyLDIsMCwwLDAtMi0yaC0xYTIsMiwwLDAsMSwwLTRoMWE2LDYsMCwwLDEsNiw2djVhMiwyLDAsMCwwLDIsMiwyLDIsMCwwLDEsMCw0LDIsMiwwLDAsMC0yLDJ2NWE2LDYsMCwwLDEtNiw2aC0xYTIsMiwwLDAsMSwwLTRaIi8+PC9zdmc+',

        docsURI: 'https://github.com/bill96012/scratch-json-extension/blob/main/README.md',

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
          '---',
          {
            opcode: 'insertValueAtIndexOfArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'insert [VALUE] at [INDEX] of array [PATH] from [OBJECT]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'z'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
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
            opcode: 'deleteIndexOfArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete [INDEX] of array [PATH] from [OBJECT]',
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
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
            opcode: 'deleteAllOfArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete all of array [PATH] from [OBJECT]',
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
            opcode: 'lengthOfArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'length of array [PATH] from [OBJECT]',
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
          '---',
          {
            opcode: 'has',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[OBJECT] has [PATH] ?',
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
            opcode: 'isArray',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[PATH] from [OBJECT] is array?',
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
            text: '[INPUT] is valid JSON?',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"x": {"y": [3, 6, 9]}}'
              }
            }
          },
          '---',
          {
            opcode: 'createDotPath',
            blockType: Scratch.BlockType.REPORTER,
            text: '[INPUT1].[INPUT2]',
            arguments: {
              INPUT1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'x'
              },
              INPUT2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'y'
              }
            }
          },
          {
            opcode: 'createArrayPath',
            blockType: Scratch.BlockType.REPORTER,
            text: ['[INPUT]', '[', '[INDEX]', ']'],
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'x'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          }
        ]
      };
    }

    get({PATH, OBJECT}) {
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) {
        return '';
      } else if(PATH === '') {
        return OBJECT;
      } else {
        PATH = this._parseJsonPath(PATH);
        OBJECT = JSON.parse(OBJECT);
      }
      try {
        let result = PATH.reduce((obj, key) => obj[key], OBJECT);
        return typeof(result) === 'undefined' ? '' : typeof(result) === 'object' ? JSON.stringify(result) : result;
      } catch {
        return '';
      }
    }

    set({PATH, OBJECT, VALUE}) {
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) {
        return '';
      } else if(PATH === '') {
        return OBJECT;
      } else {
        PATH = this._parseJsonPath(PATH);
        OBJECT = JSON.parse(OBJECT);
      }
      VALUE = (VALUE === '' || VALUE === true || VALUE === false) ? VALUE : isNaN(VALUE) ? this._isJsonString(VALUE) ? JSON.parse(VALUE) : VALUE : Number(VALUE);
      let _object = OBJECT;
      for(let i = 0; i < PATH.length; i++) {
        let _object_path_i = Array.isArray(_object) ? _object[PATH[i]] : Object.keys(_object).includes(PATH[i]) ? _object[PATH[i]] : _object;
        if(_object_path_i == _object || typeof(_object_path_i) == 'undefined' || _object_path_i === null || i == PATH.length - 1 || (i != PATH.length - 1 && (typeof(_object_path_i) != 'object' || (typeof(_object_path_i) == 'object' && ((Array.isArray(_object_path_i) && typeof(PATH[i + 1]) != 'number' && !(Object.keys(_object_path_i).includes(PATH[i + 1]))) || (!(Array.isArray(_object_path_i)) && typeof(PATH[i + 1]) == 'number')))))) {
          for(let j = PATH.length - 1; j > i; j--) {
            let temp = typeof(PATH[j]) == 'number' ? [] : {};
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
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) {
        return '';
      } else if(PATH === '') {
        return OBJECT;
      } else {
        PATH = this._parseJsonPath(PATH);
        OBJECT = JSON.parse(OBJECT);
      }
      try {
        let _object = OBJECT;
        for(let i = 0; i < PATH.length - 1; i++) {
          _object = _object[PATH[i]];
        }
        delete _object[PATH[PATH.length - 1]];
      } catch {}
      return JSON.stringify(OBJECT);
    }

    insertValueAtIndexOfArray({VALUE ,INDEX, PATH, OBJECT}) {
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) {
        return '';
      } else if(isNaN(INDEX) || Number(INDEX) - 1 < 0) {
        return OBJECT;
      }
      INDEX = Math.floor(INDEX) - 1;
      let array = this.get({PATH: PATH, OBJECT: OBJECT});
      if(array === '') return OBJECT;
      array = JSON.parse(array);
      array.splice(INDEX, 0, VALUE);
      return PATH === '' ? JSON.stringify(array) : this.set({PATH: PATH, OBJECT: OBJECT, VALUE: JSON.stringify(array)});
    }

    deleteIndexOfArray({INDEX, PATH, OBJECT}) {
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) {
        return '';
      } else if(isNaN(INDEX) || Number(INDEX) - 1 < 0) {
        return OBJECT;
      }
      INDEX = Math.floor(INDEX) - 1;
      let array = this.get({PATH: PATH, OBJECT: OBJECT});
      if(array === '') return OBJECT;
      array = JSON.parse(array);
      if(!(INDEX < array.length)) return OBJECT;
      array.splice(INDEX, 1);
      return PATH === '' ? JSON.stringify(array) : this.set({PATH: PATH, OBJECT: OBJECT, VALUE: JSON.stringify(array)});
    }

    deleteAllOfArray({PATH, OBJECT}) {
      if(OBJECT === '' || !(this._isJsonString(OBJECT))) return '';
      if(!this.isArray({PATH: PATH, OBJECT: OBJECT})) return OBJECT;
      return PATH === '' ? '[]' : this.set({PATH: PATH, OBJECT: OBJECT, VALUE: '[]'});
    }

    lengthOfArray({PATH, OBJECT}) {
      let array = this.get({PATH: PATH, OBJECT: OBJECT});
      if(array === '') {
        return 0;
      } else {
        array = JSON.parse(array);
        if(!(Array.isArray(array))) return 0;
        return array.length;
      }
    }

    has({PATH, OBJECT}) {
      PATH = PATH === '' ? '' : this._parseJsonPath(PATH);
      if(PATH.length == 0) return false;
      try {
        OBJECT = JSON.parse(OBJECT);
        let result = PATH.reduce((obj, key) => obj[key], OBJECT);
        return typeof(result) === 'undefined' ? false : true;
      } catch {
        return false;
      }
    }

    isArray({PATH, OBJECT}) {
      PATH = PATH === '' ? '' : this._parseJsonPath(PATH);
      try {
        OBJECT = JSON.parse(OBJECT);
        if(PATH.length == 0) return Array.isArray(OBJECT);
        let result = PATH.reduce((obj, key) => obj[key], OBJECT);
        return typeof(result) == 'undefined' || !Array.isArray(result) ? false : true;
      } catch {
        return false;
      }
    }

    valid({INPUT}) {
      return this._isJsonString(INPUT);
    }

    createDotPath({INPUT1, INPUT2}) {
      return `${INPUT1}${INPUT1 !== '' && INPUT2 !== '' ? '.' : ''}${INPUT2}`;
    }

    createArrayPath({INPUT, INDEX}) {
      if(isNaN(INDEX) || INDEX < 0) INDEX = 0;
      return `${INPUT}[${Math.floor(INDEX)}]`;
    }

    _isJsonString(string) {
      if(typeof(string) != 'string' || !/(^\[.*\]$)|(^\{.*\}$)/g.test(string)) return false;
      try {
        JSON.parse(string);
        return true;
      } catch {
        return false;
      }
    }

    _parseJsonPath(path) {
      if(typeof(path) != 'string') path = String(path);
      path = path.match(/(\\.|[^\.])+/g);
      if(!Array.isArray(path)) return [];
      path.forEach((element,index,array) => {
        array[index] = element.replace(/\\(?=\.)/g, '').replace(/\\\\/g, '\\');
      });
      return Array.from(path, (element, index) => {
        if(/(?:\[[0-9]+\])+$/g.test(element)) {
          let result = [];
          let _array_name = element.replace(/(?:\[[0-9]+\])+$/g, '');
          if(_array_name != '') result.push(_array_name);
          element.match(/(?:\[[0-9]+\])+$/g)[0].match(/\[([0-9]+)\]/g).forEach((element) => {
            result.push(Number(element.replace(/\[([0-9]+)\]/g, '$1')));
          });
          for(let i = 1; i < result.length; i++) path.splice(index + i, 0, result[i]);
          return result[0];
        } else {
          return element;
        }
      });
    }
  }
  Scratch.extensions.register(new ScratchJson());
})(Scratch);