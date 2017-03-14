/**
 * Created by shino on 2017/03/10.
 */

module.controller('TakePhotoController', function($scope, $http){
    $scope.takePhoto = takePhoto;
});

function takePhoto () {
    navigator.camera.getPicture (onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA
    });

    //A callback function when snapping picture is success.
    function onSuccess (imageData) {
        var image = document.getElementById ('takenPhoto');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    //A callback function when snapping picture is fail.
    function onFail (message) {
        alert ('Error occured: ' + message);
    }
}