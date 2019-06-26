'use strict';

// @ts-ignore
import template from './phone-detail.template.html';
import angular from 'angular';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    template,
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        const self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, phone => {
          phone.images = phone.images.map(src => 'app-ajs/' + src);
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
