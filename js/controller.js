var taskApp = angular.module('taskApp', []);

taskApp.controller('TaskListCtrl', function ($scope) {
  $scope.tareas = [
    {'description': 'Comprar Boletos de Avion',
     'priority': '2'},
     {'description': 'Comprar Huevosn',
     'priority': '1'},
     {'description': 'Crear Una App en AngularJS',
     'priority': '3'},
    
  ];
});