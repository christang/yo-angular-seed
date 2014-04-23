'use strict';

// To define an instantiatable class / constructor, we can
// use either the Factory() of the Value() method. I prefer
// the Factory since it allows for dependency injection.

angular.module('robozzleApp')
  .factory('Person', [function __classFactory() {


    // Define the constructor function.
    function Person( firstName, lastName ) {

      this.firstName = firstName || '';
      this.lastName = lastName || '';

    }


    // Define the "instance" methods using the prototype
    // and standard prototypal inheritance.
    Person.prototype = {

      getFirstName: function() {

        return( this.firstName );

      },

      getFullName: function() {

        return( this.firstName + ' ' + this.lastName );

      }

    };


    // Define the "class" / "static" methods. These are
    // utility methods on the class itself; they do not
    // have access to the "this" reference.
    Person.fromFullName = function( fullName ) {

      var parts = ( fullName || '' ).split( /\s+/gi );

      return(
        new Person(
            parts[ 0 ],
            parts.splice( 0, 1 ) && parts.join( ' ' )
        )
      );

    };


    // Return constructor - this is what defines the actual
    // injectable in the DI framework.
    return( Person );

  }]);
