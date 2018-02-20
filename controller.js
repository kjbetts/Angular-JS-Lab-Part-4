(function(){
  function FormController(dataService){
   var vm = this;
   vm.todoList = dataService.getData();

   vm.setData = function(newItem){
     dataService.setData(newItem);
}


    vm.removeItem = function(index){
      dataService.removeItem(index);
    }

  }
  angular
  .module("app")
  .controller("FormController", FormController);

})();
