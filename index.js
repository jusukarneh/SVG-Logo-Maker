const Circle = require("./lib/Circle")
const inquirer = require("inquirer")
const fs = require("fs")
const Shapes = require("./lib/Shapes")
const Triangle =require("./lib/Triangle")
const Square = require("./lib/Square")

inquirer
.prompt([{
    type:"input",
    message:"Enter SVG Text:",
    name:"text"
},{
    type:"list",
    message:"Enter text Color",
    name:"textColor",
    choices:["blue","orange","pink"]

},{
    type:"list",
    message:"Enter Shape",
    name:"shape",
    choices:["circle","square","triangle"]
},{
    type:"list",
    message:"Enter Shape color",
    name:"shapeColor",
    choices:["blue","orange","pink"]
}

])
.then(response=>{

    if(response.shape==="circle"){
        const circle = new Circle()
        circle.setColor(response.textColor)
        circle.setText(response.text)
        circle.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", circle.render(),(err)=>{ 
            console.log("Generated logo.svg")
        })
    } if(response.shape==="square"){
        const square = new Square()
        square.setColor(response.textColor)
        square.setText(response.text)
        square.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", square.render(),(err)=>{ 
            console.log("Generated logo.svg")
        })

    }if(response.shape==="triangle"){
        const triangle = new Triangle()
        triangle.setColor(response.textColor)
        triangle.setText(response.text)
        triangle.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", triangle.render(),(err)=>{ 
            console.log("Generated logo.svg")
        })
    }
})