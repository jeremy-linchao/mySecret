const client = require('../helpers/es');

function DeletePasswordById(req, res) {
  client.delete({
    index: 'password',
    type: 'password',
    id: req.swagger.params.id.value
  }, function(error,response){
    res.header('Content-Type', 'application/json');
    if(error){
      console.log(error);
      res.statusCode = 409;
      res.end(JSON.stringify(error));
    } else {
      res.statusCode = 204;
      res.end();
    }
  })
};

module.exports = {
  DeletePasswordById: DeletePasswordById  
};