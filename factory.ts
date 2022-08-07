import { FactoryShape } from "./factory/FactoryShape";
import { Shape } from "./factory/Shape";

console.log("/**************ts_patterns********************/ \n");

// Circle
const circle: Shape = FactoryShape.create(FactoryShape.CIRCLE);
circle.draw();

// Rectangule
const rectangule: Shape = FactoryShape.create(FactoryShape.RECTANGULE);
rectangule.draw();

// Square
const square: Shape = FactoryShape.create(FactoryShape.SQUARE);
square.draw();

console.log("\n/***************ts_patterns*******************/");
