'use strict';

/* jasmine specs for controllers go here */
describe('youtubeSearch controllers', function() {

  describe('youtubeSearchCtrl', function(){

    beforeEach(module('ovcApp'));

    it('should create "videos" model with 3 video', inject(function($controller) {
      var scope = {},
          ctrl = $controller('youtubeSearchCtrl', {$scope:scope});

      expect(scope.videos.length).toBe(3);
    }));

  });
});
