const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  hosts: 'localhost:9200',
  log: 'error'
});

module.exports = client;