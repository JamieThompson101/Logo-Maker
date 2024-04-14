const { Circle, Square, Triangle } = require('./shapes');

describe("Circle", () => {
    it("should render a circle", () => {
        const circle = new Circle();
        const expectedSvg = `<circle fill="green" cx="150" cy="120" r="80" />`;
        circle.setColor("green")
        const testSvg = circle.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    it("should render a square", () => {
        const square = new Square();
        const expectedSvg = `<rect fill="green" x="50" y="45" width="200" height="200" />`;
        square.setColor("green")
        const testSvg = square.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    it("should render a triangle", () => {
        const triangle = new Triangle();
        const expectedSvg = `<polygon fill="green" points="150,18 244, 182 56, 182" />`;
        triangle.setColor("green")
        const testSvg = triangle.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});