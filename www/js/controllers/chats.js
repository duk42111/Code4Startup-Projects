'use strict';

app.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

    $scope.image = 'https://img0.etsystatic.com/127/0/6794688/il_fullxfull.893288132_n8d4.jpg';

    $scope.button = function(product) {
      console.log('button was clicked', product, $scope.image);
      Products.saveProduct(product, $scope.image);
    }
});