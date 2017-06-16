const client = require('../helpers/es');

module.exports = {
  GetPasswordById : GetPasswordById
}

function GetPasswordById(req, res) {
  client.get({
    index: 'password',
    type: 'password',
    id: req.swagger.params.id.value
  }, function(error, response){
    res.header('Content-Type', 'application/json');
    if(error){
      res.end(JSON.stringify(error));
    } else {
      res.end(JSON.stringify(response._source));
    }
  });
}
