class Ship {
  constructor({name, type, maxCrew, odometer = 0, fuelCapacity = 10, fuel, captain = null, parts = {}}) {
    this.name = name;
    this.validTypes = ['military', 'cargo', 'passenger'];
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.captain = captain;
    this.crew = [];
    this.cargo = [];
    this.parts = parts;
  }

  addCrew(member) {
   var spaceLeft = this.maxCrew - this.crew.length;
   for (var i = 0; i < spaceLeft; i++){
     member[i].isAlive === true && this.crew.push(member[i]);
    }
  }

  loadCargo(partCargo) {
    (!!partCargo.type === true) && (this.cargo.push(partCargo));
  }

  updatePart(part) {
   if (part.type === undefined) {
     return {};
   }
   var existingPart = this.parts[part.type];
   var partValue = existingPart ? existingPart.value : 0;
   var difference = partValue - part.value;
   this.parts[part.type] = part;
   return difference;
  }

  checkReadiness() {
    var checkIfReady = false;
    var notes = 'Good to go!'
    if (this.captain === null) {
      notes = 'Cannot fly without a captain'
    } else if (this.fuel === 0) {
      notes = 'Cannot fly without fuel'
    } else if (Object.keys(this.parts).length === 0) {
       notes = 'Cannot fly without all parts'
    } else {
      checkIfReady = true;
    }
    return {
      readyToFly: checkIfReady,
      notes: notes,
    }
  }
}




































//  if (part.type === undefined) {
//    return
//  }
//  // setting a var to check if there is computer in the array of this.parts. Looks into this.parts and checks if there is an existing part.
//  var existingPart = this.parts[part.type]
//  // setting a var that says if there's an existing part use the value of that part other wise set the value to 0.
//  var partValue = existingPart ? existingPart.value : 0
//  // if there is a value subtract the existing value from the new value
//  var diff = partValue - part.value;
//  // the new part gets assigned to part
//  this.parts[part.type] = part;
//  // return the difference between the values
//  return diff
// }
//
// checkReadiness() {
//   return Boolean(this.name && this.type && this.value);







module.exports = Ship;
