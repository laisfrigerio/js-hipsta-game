class Button {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.element = createButton(this.text);
    }

    addClass(className) {
        this.element.addClass(className);
    }

    setY(y) {
        this.y = y;
    }
}