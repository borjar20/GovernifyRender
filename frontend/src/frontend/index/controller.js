/*!
governify-render 1.0.0, built on: 2018-05-09
Copyright (C) 2018 ISA group
http://www.isa.us.es/
https://github.com/isa-group/governify-render#readme

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/

$scope.tasks = []

$scope.form = {}

$scope.getTasks = () => {
    $http.get('http://localhost:8081/api/v1/scrums').then((res)=>{
        $scope.tasks = res.data;
    },
    (err)=>{console.log(err)})
}

$scope.advanceTask = (task) => {
    $http.put('http://localhost:8081/api/v1/scrum/advance',task).then(()=>{
        $scope.getTasks();
    },
    (err)=>{console.log(err)})
}

$scope.backTask = (task) => {
    $http.put('http://localhost:8081/api/v1/scrum/back',task).then(()=>{
        $scope.getTasks();
    },
    (err)=>{console.log(err)})
}

$scope.deleteTask = (id) => {
    $http.delete(`http://localhost:8081/api/v1/scrums/${id}`).then(()=>{
        $scope.getTasks();
    },
    (err)=>{console.log(err)})
}

$scope.addTask = () =>{
    $http.post('http://localhost:8081/api/v1/scrums',$scope.form).then(()=>{
        $scope.getTasks();
    },
    (err)=>{console.log(err)})

    var closeButton = document.getElementById('cerrar')
    closeButton.click();
}

$scope.getTasks();

