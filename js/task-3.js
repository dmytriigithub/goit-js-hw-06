// Задача 3. Конструктор рядків

class StringBuilder {

    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;//— повертає поточне значення приватної властивості value.
    }
    padEnd(str) {
        const arrayFromValue = this.#value.split('');
        this.#value = [...arrayFromValue, str].join('');
        //— отримує параметр str (рядок) і додає його в кінець значення приватної властивості value.
    }
    padStart(str) {
        const arrayFromValue = this.#value.split('');
        this.#value = [str, ...arrayFromValue].join('');
        //— отримує параметр str (рядок) і додає його на початок значення приватної властивості value.
    }
    padBoth(str) {
        const arrayFromValue = this.#value.split('');
        this.#value = [str, ...arrayFromValue, str].join('');
        //— отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value.
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="