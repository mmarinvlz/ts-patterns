import { Circle } from "./Circle";
import { Rectangule } from "./Rectangule";
import { Square } from "./Square";

export class FactoryShape {
  static readonly CIRCLE: string = "circle";
  static readonly RECTANGULE: string = "rectangule";
  static readonly SQUARE = "square";

  static create(entity: string) {
    switch (entity) {
      case FactoryShape.CIRCLE:
        return new Circle();
      case FactoryShape.RECTANGULE:
        return new Rectangule();
      case FactoryShape.SQUARE:
        return new Square();
    }
  }
}
