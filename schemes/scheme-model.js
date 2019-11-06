const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development)

module.exports = {
  find,
  findById,
  findSteps
  // add,
  // update,
  // remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes')
    .where({'schemes.id': id})
}

function findSteps(id) {
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({ 'schemes.id': id })
    .orderBy('step_number', 'asc')
}

