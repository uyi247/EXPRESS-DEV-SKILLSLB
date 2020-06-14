const skills = [
  { id: 001, skill: "HTML", expert: true },
  { id: 002, skill: "CSS", expert: true },
  { id: 003, skill: "Javascript", expert: true },
  { id: 004, skill: "Node", expert: false },
  { id: 005, skill: "Mongodb", expert: false },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.expert = false;
  skills.push(skill);
}
function deleteOne(id) {
  const index = skills.findIndex((todo) => todo.id === parseInt(id));
  skills.splice(index, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
