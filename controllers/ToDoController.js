(function () {
    angular.module("ToDoApp")
    .controller("ToDoController", toDoController);
    toDoController.$inject = ["$window"];
    function toDoController($window) {
        var vm = this;
        vm.listOfItems = [];
        vm.listItem = {
            "name": "",
            "isDone": false
        };
        vm.listTitle = "";
        vm.successMessage = "";
        vm.errorMessage = "";
        
        vm.todo = {
            "title": "",
            "todoList": []
        };
        
        vm.addToList = function(listItem) {
            if(listItem.title && listItem.name) {
                $('.success-msg').removeClass('hide');
                $('.success-msg').addClass('show');
                vm.todo.todoList.push(listItem);
                vm.listItem = {};
                vm.successMessage = "Successfully added to list";
                setTimeout(function() {
                    $('.success-msg').removeClass('show');
                    $('.success-msg').addClass('hide')
                }, 1000);
            } else {
                $('.error-msg').removeClass('hide');
                $('.error-msg').addClass('show');
                vm.errorMessage = "List Title or Name can not be empty";setTimeout(function() {
                    $('.error-msg').removeClass('show');
                    $('.error-msg').addClass('hide')
                }, 1000);
            }
            
        };
        
        vm.saveList = function() {
            vm.listOfItems.push(vm.todo);
            vm.todo = {
                "title": "",
                "todoList": []
            };
            $window.sessionStorage.setItem("savedList",JSON.stringify(vm.listOfItems));
            vm.successMessage = "To do list saved successfully";
        };
        
        vm.clearList = function() {
            vm.listOfItems = [];
            vm.todo = {
                "title": "",
                "todoList": []
            };
        };
        
        vm.getSavedListFromSession = function () {
            vm.listOfItems = JSON.parse($window.sessionStorage.getItem("savedList"));
        };
    }
})();