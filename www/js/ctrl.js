angular.module('app.ctrl', ['ionic', 'ngCordova'])


        .controller('ruokaCtrl', function($scope, $http, $cordovaInAppBrowser){
	   $scope.ruoka = {"nimi": "", "kuvaus": ""};
	   if($scope.ruoka.kuvaus === ""){
	       document.getElementById('descDivId').style.display = 'none';
	   }

	   $scope.generateFood = function(){
	       $http.get('./lib/foods.json').success(function(response){
		  return response;
	       }).then(function(res){
		  $scope.foods = res.data;
		  do{
		      $scope.i = Math.floor(Math.random() * $scope.foods.length);
		  }while($scope.foods[$scope.i].nimi === $scope.ruoka.nimi)
		  changeFood($scope.i);

		  if($scope.ruoka.kuvaus){
		      document.getElementById('descDivId').style.display = 'block';
		  }else{
		      document.getElementById('descDivId').style.display = 'none';
		  }
	       });

	   };
	   function changeFood(i){
	       $scope.ruoka.nimi = $scope.foods[i].nimi;
	       $scope.ruoka.kuvaus = $scope.foods[i].kuvaus;
	   }
	   $scope.browser = function(foodName){
	       var src = foodName.split(' ').join('+');
		   $cordovaInAppBrowser.open('http://google.com/webhp#q='+src, '_blank');
	   };

        })
        .controller('palaCtrl', function($scope, $http){
	   $scope.pala = {"nimi": "", "kuvaus": ""};

	   if($scope.pala.kuvaus === ""){
	       document.getElementById('descDivId2').style.display = 'none';
	   }

	   $scope.generateSnack = function(){
	       $http.get('./lib/snacks.json').success(function(response){
		  return response;
	       }).then(function(res){
		  $scope.foods = res.data;
		  do{
		      $scope.i = Math.floor(Math.random() * $scope.foods.length);
		  }while($scope.foods[$scope.i].nimi === $scope.pala.nimi)
		  changeFood($scope.i);

		  if($scope.pala.kuvaus){
		      document.getElementById('descDivId2').style.display = 'block';
		  }else{
		      document.getElementById('descDivId2').style.display = 'none';
		  }
	       });

	   };
	   function changeFood(i){
	       $scope.pala.nimi = $scope.foods[i].nimi;
	       $scope.pala.kuvaus = $scope.foods[i].kuvaus;
	   }


        })
        .controller('lisaaCtrl', function($scope, $http){
	   $scope.init = $http.get('./lib/foods.json').success(function(response){
	       console.log(response);
	       return response;
	   }).then(function(res){
	       console.log(res);
	       $scope.ruokaa = res.data;
	   });

	   $scope.addToFile = function(ruoka){
	       console.log(ruoka);
	       console.log(ruoka.tyyppi);
	       if(ruoka.tyyppi === "Ruoka"){
		  $http.get('./lib/foods.json').success(function(response){
		      return response;
		  }).then(function(res){
		      console.log(res.data);
		      var arr = res.data;  //parse the JSON
		      arr.push({//add the employee
			 "nimi": ruoka.nimi,
			 "kuvaus": ruoka.kuvaus
		      });
		      res.data = JSON.stringify(arr);




		  });
	       }else{
		  $http.get('./lib/snacks.json').success(function(response){
		      return response;
		  }).then(function(res){
		      console.log(res.data);
		  });
	       }
	   };
        });
