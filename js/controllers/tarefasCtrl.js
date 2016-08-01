angular.module("tarefas").controller("tarefasCtrl", function($scope, $http, $sce, tarefasAPI) {

	//carrega tarefas do back-end (API)
	var carregarTarefas = function() {
			tarefasAPI.getTarefas().success(function(data, status) {
					$scope.tarefas = data;		
					$scope.totalTarefas = $scope.tarefas.length;
			});
	};	

	carregarTarefas();

	//preferências de ordenação da lista de tarefas
	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	

	//carrega a data atual
	$scope.now = function() {
		return new Date();
	};	

	//toggle na visibilidade da linha de nova tarefa
	$scope.novaTarefa = false;	
	$scope.setNovaTarefa = function() {
		$scope.novaTarefa = !$scope.novaTarefa;
	};

	//toggle das checkboxes de todas as tarefas
	$scope.selecionaTodos = false;	
	$scope.selecionarTodos = function() {
		$scope.selecionaTodos = !$scope.selecionaTodos;
  		angular.forEach($scope.tarefas, function (tarefa) {
      	tarefa.selecionada = $scope.selecionaTodos;
  		});			
  	}

	$scope.updateStatusTarefa = function (id, opcao) {
		tarefasAPI.updateStatusTarefa(id, opcao).success(function() {
			carregarTarefas();
		});
	}	  		

  	$scope.adicionar = function(tarefa) {
		tarefasAPI.saveTarefa(tarefa).success(function() {
			delete $scope.tarefa;
			carregarTarefas();
		}).error(function(data) {
			$scope.message = data;
		});
  	}

  	$scope.deletarSelecao = function() {
  		angular.forEach($scope.tarefas, function (tarefa) {
  			if (tarefa.selecionada) {
				$scope.deletar(tarefa.id);
  			};
  		});
	};
		
  	$scope.deletar = function(id) {
		tarefasAPI.deletaTarefa(id).success(function() {
			carregarTarefas();
		});
  	};

  	//$scope.htmlTest = $sce.trustAsHtml("<div style='color: white;'>TESTE</div>");	

  	$scope.contatoNovo = {};
});
