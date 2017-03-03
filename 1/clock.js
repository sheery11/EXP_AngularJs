function MyController($scope,$timeout){
	var updateClock = function(){
		$scope.clock = new Date();       
		$timeout(function(){
			updateClock();
		},1000);     //timeout对象     时钟每秒走一步

	};           //匿名函数结束
		updateClock();
	};



/*
function MyController($scope){
    $scope.clock = {
	     now:new Date()
    };

    var updateClock = function(){
	    $scope.clock.now = new Date()
    };

    setInterval(function(){
	    $scope.$apply(updateClock);
    },1000);
    updateClock();	
};
       
*/