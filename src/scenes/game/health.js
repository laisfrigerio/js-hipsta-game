class Health {
    constructor(initialValue, maximum) {
        this.initialValue = initialValue;
        this.total = this.initialValue;
        this.maximum = maximum;
        this.toStayInvisible = false;
    }

    draw() {
        image(healthImage, 4, 4, 30, 25);
        textSize(30);
        text(this.total, 60, 25);
    }

    add() {
        if (this.total < this.maximum) {
            this.total++;
        }
    }

    remove() {
        this.total--;
    }
}