const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Car = require('../models/car');

describe('Car Model', () => {
    
    // Return an array of all cars in the database
    it('should be able to return an array of cars', () => {
        // call function to return an array of cars
        const allCars = Car.getAll();
        // expect instance to be an array
        expect(allCars).to.be.an.instanceOf(Array);
        // make sure the length is 7 (seed data)
        expect(allCars).to.have.lengthOf(7)
    });

});