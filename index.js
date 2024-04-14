// import the inquirer module
const inquirer = require("inquirer");
const SVG = require("./lib/SVG");
// create path for each shape class
const { Circle, Square, Triangle } = require("./lib/Shapes");
const { writeFile } = require("fs").promises;
// question prompts for the user that takes user's input to use for the logo 
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
        validate: function (value) {
            if (value.length > 3) {
                return "Please enter up to three characters.";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for the text (keyword or hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape (keyword or hexadecimal number):",
    },
];

// Prompt the user for the logo's text, shape, and colors
// Create a new instance of the SVG class

inquirer.prompt(questions).then(({ text, textColor, shapeType, shapeColor }) => {
    let shape;

    switch (shapeType) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default:
            shape = new Square();
            break;
    }

    shape.setColor(shapeColor)
    const svg = new SVG()
    svg.setText(text, textColor)
    svg.setShape(shape)
    return writeFile("./examples/logo.svg", svg.render())
})
    .then(() => console.log("Generated logo.svg"))

    .catch(err => console.log(err));  