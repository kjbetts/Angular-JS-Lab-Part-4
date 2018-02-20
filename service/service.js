(function() {
  function dataService($location){

    var todoListServ = ["Facetime", "Walk Dog", "Wash Hands"];

    return{
      getData: getData,
      setData: setData,
      removeItem: removeItem
    }



    function getData(){
      return todoListServ;
    }

    function setData(newItem){
      todoListServ.push(newItem);
    }



    function removeItem(index){
      todoListServ.splice(index, 1)
    }






  }


  angular
  .module("app")
  .factory("dataService", dataService);
})();
