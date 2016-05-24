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
    .factory('comun', function(){
        var comun = {}

        comun.tareas = [{
            nombre: 'Comprar Comida',
            prioridad: 1   
        },{
            nombre: 'Lavar el Auto',
            prioridad: 0   
        },{
            nombre: 'Crear una App en Angular',
            prioridad: 2   
        },{
            nombre: 'Pintar la casa',
            prioridad: 2   
        }]

        return comun;
    })
    .controller('ControlAgregar', function($scope, comun){
        $scope.tarea = {};
        //$scope.tareas = [];
        $scope.tareas = comun.tareas;

        $scope.prioridades = ['Baja', 'Normal', 'Alta']

        $scope.agregar = function(){
            $scope.tareas.push({
                nombre : $scope.tarea.nombre,
                prioridad : parseInt($scope.tarea.prioridad)
            })
        },

        $scope.masPrioridad = function(tarea) {
            tarea.prioridad +=1;
        }

        $scope.menosPrioridad = function(tarea) {
            tarea.prioridad -=1;
        }

        $scope.eliminar = function(tarea) {
            var indice = $scope.tareas.indexOf(tarea);
            $scope.tareas.splice(indice,1);
        }
    })