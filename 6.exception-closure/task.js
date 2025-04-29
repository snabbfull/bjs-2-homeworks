function parseCount(arg) {
  if (isNaN(Number.parseFloat(arg))) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(arg);
  }
}

function validateCount(arg) {
  try {
    return parseCount(arg);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    return +(
      (1 / 4) *
      (4 * this.a ** 2 * this.b ** 2 -
        (this.a ** 2 + this.b ** 2 - this.c ** 2) ** 2) **
        (1 / 2)
    ).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },

      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
