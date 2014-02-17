/**
 *
 * Created by myself on 2/12/14.
 */
angular.module('example1App')
    .controller('NewEventCtrl', function ($scope) {
        $scope.saveEvent = function (event, newEventForm) {//our event object, properties {name, text, time, location, city, imageUrl}
            if (newEventForm.$valid) {
                alert(event.name + " was saved!");
            }
            else
                alert('invalid form!')
        }
        $scope.cancelEdit = function () {
            window.alert('canceled!')
            window.location = "#/";
        }
    });
