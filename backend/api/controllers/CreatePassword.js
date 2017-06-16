const uuidV4 = require('uuid/v4');
const client = require('../helpers/es');


function CreatePassword(req, res) {
  const id = uuidV4();
  client.create({
    index: 'password',
    type: 'password',
    id: id,
    body: req.swagger.params.password.value
  }, function(error,response){
    res.header('Content-Type', 'application/json');
    if(error){
      console.log(error);
      res.statusCode = 409;
      res.end(JSON.stringify(error));
    } else {
      console.log(JSON.stringify(req.swagger.params.password.value));
      res.statusCode = 201;
      res.end(JSON.stringify({
        id: id,
        name: req.swagger.params.password.value.name,
        password: req.swagger.params.password.value.password,
        url: req.swagger.params.password.value.url,
        tag: req.swagger.params.password.value.tag
      }));
    }
  })
};

module.exports = {
  CreatePassword: CreatePassword
};