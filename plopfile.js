const fs = require("fs")

const comp_dir = fs
    .readdirSync("src/components/Auto")
    .map((it) => ({name:it,value: it}))

module.exports = function (plop /** @type {import('plop').NodePlopAPI} */) {
    // create your generators here
    plop.setGenerator('component', {
        description: 'create component file',
        prompts: [{
            type: "list",
            name: "feature",
            message: "feature name please",
            choices: comp_dir
        },{
            type: "input",
            name: "UpperPascalCase",
            message: "component UpperPascalCase please"
        }], // array of inquirer prompts
        actions: [
            {
                type:"add",
                path: "src/components/Auto/{{feature}}/{{UpperPascalCase}}.tsx",
                templateFile: "src/plop-templates/component/Component.tsx.hbs"
            }
        ]  // array of actions
    });
};