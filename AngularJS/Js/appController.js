app.controller("mainController", [
    "$scope", "$window", function($scope, $window){
        $scope.notes = fetch();
        $scope.note = {
            title: "",
            body: ""
        }
        $scope.clear = function (){
            $scope.note.title = "";
            $scope.note.body = "";
        }
        $scope.save = function(){
            console.log($scope.note);
            $scope.notes.push($scope.note);
            $window.localStorage.setItem("notes", JSON.stringify($scope.notes))
        }
        function fetch(){
            var temp = $window.localStorage.getItem("notes")

            if((temp == null) || (typeof temp === "undefined"))
            return [];
            else
                return JSON.parse(temp);
        }
    }
]);