//usually loaded from definitions-database (Git)
var configDefinition = {
    'environments': [
        {
            'id': 'uuid-env-1',
            'name': 'dev'
        },
        {
            'id': 'uuid-env-2',
            'name': 'sprint'
        },
        {
            'id': 'uuid-env-3',
            'name': 'prod'
        }
    ],

    'keys': {
          "maxNrConnections" : {
              "type": "positiveInteger",
              "compareEnvs": false
          },

          "endpoint": {
              "type": "url",
              "compareEnvs": false
          },

          "host": {
              "type": "ip",
              "compareEnvs": false
          }
    }
};

//finally, these should be defined in modules
var tests = {
    'positiveInteger': function(input) {
        var result;
        try {

            var isNumber = !isNaN(input);
            if (!isNumber) {
                return false;
            }

            var nrInput = Number(input);
            if (Number(input) <= 0) {
                return false;
            }

            result = true;
        } catch (e) {
            result = false;
        }

        return result;
    },

    'url': function(input) {
        return true;
    }
}

var test = function(key, value) {
    console.log();
    console.log('testing ' + key + '=' + value);
    var type = configDefinition.keys[key].type;
    console.log('  ' + type);
    var isOk = tests[type](value);
    console.log('  is ok: ' + isOk);
};

test('endpoint', 'abc');
test('maxNrConnections', 0);