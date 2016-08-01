angular.module('tarefas').directive('uiIconbtn', function() {
	return {
		scope: {
			title: '@',
			icon: '@',
			action: '@'
		},
		
		restrict: 'E',
		templateUrl: 'view/btn-icon.html',
		replace: true,
	};
});