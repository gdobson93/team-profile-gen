const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");
const jest = require("jest");
const util = require("util");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

async function buildTeam(){

  let thtml = "";

  let teamCount;

  await inquirer.prompt(
      {
          type: "number",
          message: "How many people are in your team?",
          name: "teamnumber"
      }
  )
  .then((data) => {

      teamCount = data.teamnumber + 1;
  });
  
  if (teamCount === 0){
      console.log("Everybody needs a team, try again when you have a team.");
      return;
  }
  
  for(i = 1; i < teamCount; i++){

      let name;
      let id;
      let title;
      let email;

      await inquirer.prompt([ 
          {
              type: "input",
              message: `What is employee (${i})'s name?`,
              name: "name"
          },
          {
              type: "input",
              message: `What is the employee (${i})'s id?`,
              name: "id"
          },
          {
              type: "input",
              message: `What is the employee (${i})'s Email?`,
              name: "email"
          },
          {
              type: "list",
              message: `what the employee (${i})'s title?`,
              name: "title",
              choices: ["Engineer", "Intern", "Manager"]
          }
      ])
      .then((data) => {

          name = data.name;
          id = data.id;
          title = data.title;
          email = data.email;
      });

      switch (title){

        case "Intern":
          await inquirer.prompt([
              {
                  type: "input",
                  message: "What school is your Intern attending?",
                  name: "school"
              }
          ])
          .then((data) => {
              const intern = new Intern(name, id, email, data.school);
              teammate = fs.readFileSync("templates/intern.html");
              thtml = thtml + "\n" + eval('`'+ teammate +'`');
          });
          break;  

        case "Engineer":
          await inquirer.prompt([
              {
                  type: "input",
                  message: "What is your Engineer's GitHub?",
                  name: "github"
              }
          ])
          .then((data) => {
              const engineer = new Engineer(name, id, email, data.github);
              teammate = fs.readFileSync("templates/engineer.html");
              thtml = thtml + "\n" + eval('`'+ teammate +'`');
          });
          break;
      
        case "Manager":

              await inquirer.prompt([
                  {
                      type: "input",
                      message: "What is your Manager's Office Number?",
                      name: "officenum"
                  }
              ])
              .then((data) => {

                  const manager = new Manager(name, id, email, data.officenum);

                  teammate = fs.readFileSync("templates/manager.html");

                  thtml = thtml + "\n" + eval('`'+ teammate +'`');
              });
              break;
      }
  };

  const mhtml = fs.readFileSync("templates/main.html");
  
  html = eval('`'+ mhtml +'`');

  fs.writeFile("output/team.html", thtml, function(err) {

      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });
}

buildTeam();
