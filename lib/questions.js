const employeeQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name"
  },

  {
    type: "input",
    message: "What is the employee's ID?",
    name: "id"
  },

  {
    type: "input",
    message: "What is the employee's email?",
    name: "email"
  },

  {
    type: "list",
    message: "What is the employee's job role?",
    name: "role",
    choices: ["Intern", "Engineer", "Manager"]
  }
];

const intQuestion = [
  {
    type: "input",
    message: "Where do you go to school?",
    name: "school"
  }
];

const enginQuestion = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username"
  }
];

const mgrQuestion = [
  {
    type: "input",
    message: "What is your office number?",
    name: "officenum"
  }
];

const addMemberQuestion = [
  {
    type: "list",
    message: "Would you like to add a team member?",
    name: "role",
    choices: ["Yes please", "No that's everyone"]
  }
];

module.exports = {
  employeeQuestions,
  intQuestion,
  enginQuestion,
  mgrQuestion,
  addMemberQuestion
};