const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development)

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

// function add(newScheme) {
//   return db('schemes')
//     .insert(newScheme)
//     .then(ids => this.findById(ids[0]));
// }

async function add(newScheme) {
  const [id] = await db('schemes').insert(newScheme);
  return findById(id);
}

async function update(changes, id) {
  await db('schemes')
    .where({id})
    .update(changes)
  return findById(id)
}

function remove(id) {
  return db('schemes')
    .where({id})
    .del()
}