const Triangle = require("./Triangle")
const Circle = require("./Circle")
const Square = require("./Square")
// Circle Shape
describe('circle', ()=>{
    test('renders correctly', ()=>{
        const shape = new Circle();
        var color ='green'
        shape.setColor(color);
        var text = "jdk"
        shape.setText(text)
        var shapeColor = "blue"
        shape.setShapeColor(shapeColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`);
        
    });
});

// Square Shape
describe('Square', ()=>{
    test('renders correctly', () => {
        const shape = new Square();
        var color ='green'
        shape.setColor(color);
        var text = "jdk"
        shape.setText(text)
        var shapeColor = "blue"
        shape.setShapeColor(shapeColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="10" y="10" width="300" height="200" stroke="black" fill="${shapeColor}" stroke-width="5"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`)
    })
})

// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color ='green'
        shape.setColor(color);
        var text = "jdk"
        shape.setText(text)
        var shapeColor = "blue"
        shape.setShapeColor(shapeColor)
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`)
    })
})