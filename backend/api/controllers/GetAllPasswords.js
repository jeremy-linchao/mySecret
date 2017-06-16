const client = require('../helpers/es');

function GetAllPasswords(req, res) {
  client.search({
    index:'password',
    type: 'password',
    q: '*',
    _sourceInclude: 'name, password, url, tag'
  }, function(error, response){
    if(error){
      res.end(JSON.stringify(error));
    } else {
      let results = [];
      results = response.hits.hits.map(hit => {
        return Object.assign({}, hit._source, { id: hit._id } );
      });
      res.header('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(results));
    }
  });
}

module.exports = {
  GetAllPasswords
}