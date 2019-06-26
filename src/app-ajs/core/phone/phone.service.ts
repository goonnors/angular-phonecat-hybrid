'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
  $resource => $resource('app-ajs/phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  })
]);
