const db = require('./conn');

class Car {

    constructor(id, year, make, model, class_type){
        this.id = id;
        this.year = year;
        this.make = make;
        this.model = model;
        this.classType = class_type
    }

}