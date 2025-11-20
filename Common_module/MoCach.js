class SuperHero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getDetails() {
        return `${this.name} has the power of ${this.power}.`;
    }
    getPower() {
        return this.power;
    }
    setPower(power) {
        this.power = power;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

}

module.exports = SuperHero;