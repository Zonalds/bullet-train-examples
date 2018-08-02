var app = angular.module('bulletTrainApp', []);

app.controller('Controller', function Controller($scope) {
    $scope.has_loaded = false;
    $scope.instant_messaging = false;
    $scope.font_size = 12;
    var environmentID = "QjgYur4LQTwe5HpvbvhpzK";
    bulletTrain.init({
        environmentID: environmentID,
        onChange: function () {
            $scope.$apply(function(){
                $scope.has_loaded = true;
                $scope.instant_messaging = bulletTrain.hasFeature("instant_messaging");
                $scope.font_size = bulletTrain.getValue("font_size");
                console.log("Received flags", bulletTrain.getAllFlags())
            });
        }
    });
});
