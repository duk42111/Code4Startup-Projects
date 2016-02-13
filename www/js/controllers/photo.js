'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state) {

  var options = {
      quality: 75,
      destinationType: Camera.DestinationType.Data_URL,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };

  $scope.takePhoto = function(){
    console.log('takePhoto was clicked');

    //Camera Plugin
    options.sourceType = Camera.PictureSourceType.CAMERA;

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64" + photo;
      $state.go('tab.photodetail');
    })
  }

  $scope.choosePhoto = function(){
    console.log('choosePhoto was clicked');

    options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64" + photo;
      $state.go('tab.photodetail');
    })
  }

});