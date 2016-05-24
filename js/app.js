angular.module('taskApp',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('alta',{
                url:'/alta',
                templateUrl:'views/tarea_agregar.html',
                controller: 'ControlAgregar'
            })            
            .state('editar',{
                url:'/editar',
                templateUrl:'views/tarea_editar.html'
            });
        $urlRouterProvider.otherwise('alta');
    })
    .controller('ControlAgregar', function($scope){
        $scope.tarea = {};
        $scope.tareas = [];

        $scope.prioridades = ['Baja', 'Normal', 'Alta']

        $scope.agregar = function(){
            $scope.tareas.push({
                nombre : $scope.tarea.nombre,
                prioridad : parseInt($scope.tarea.prioridad)
            })
        }
    })