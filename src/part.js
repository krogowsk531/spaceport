class Part {
  constructor({name, type, value}) {
    this.name = name;
    this.type = type;
    this.validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined
    ];
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.value = value;
    this.broken = false;
  }
  isValid() {
    return !!(this.name && this.type && this.value);
  }
}

module.exports = Part;
