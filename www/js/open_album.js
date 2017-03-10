/**
 * Created by shino on 2017/03/09.
 */


// document.addEventListener("deviceready", onDeviceReady, false);
//
// function onDeviceReady () {
//     window.alert ('Loading Cordova is completed');
// }


module.controller('AlbumController', function($scope, $http){
    $scope.openPhotoAlbum = openPhotoAlbum;
});

function openPhotoAlbum () {
    console.log("openPhoto");
    navigator.camera.getPicture(
        onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
}

function onSuccess (imageURI) {
    var largeImage = document.getElementById ('picture');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function onFail (message) {
    alert('An error occured: ' + message);
}
