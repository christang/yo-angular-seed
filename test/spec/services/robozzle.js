'use strict';

describe('Service: robozzle', function () {

  describe('Factory: Person', function () {

    // load the service's module
    beforeEach(module('robozzleApp'));

    // instantiate service
    var Person, albert, galileo;
    beforeEach(inject(function (_Person_) {
      Person = _Person_;
      albert = new Person('Albert', 'Einstein');
      galileo = new Person('Galileo', 'Galilei');
    }));

    it('should get first name', function () {
      expect(albert.getFirstName()).toEqual('Albert');
    });

    it('should get full name', function () {
      expect(albert.getFullName()).toEqual('Albert Einstein');
    });

    it('should create Person from full name', function () {
      expect(Person.fromFullName('Albert Einstein')).toEqual(albert);
      expect(Person.fromFullName('Albert Einstein')).not.toEqual(galileo);
    });

  });

});
