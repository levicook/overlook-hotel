import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/booking.js';
import Customer from '../src/classes/customer.js';

describe('Customer', function() {
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });
});
