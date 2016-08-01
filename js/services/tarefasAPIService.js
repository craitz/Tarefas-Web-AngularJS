angular.module("tarefas").factory("tarefasAPI", function($http) {
	var _getTarefas = function() {
		return $http.get("http://localhost:8090/tarefas");
	};

	var _saveTarefa = function(tarefa) {
		return $http.post("http://localhost:8090/tarefas", tarefa);
	};

	var _updateStatusTarefa = function(id, opcao) {
		return $http.put("http://localhost:8090/tarefas" + "/" + id + "/" + opcao);
	};

	var _deletaTarefa = function(id) {
		return $http.delete("http://localhost:8090/tarefas" + "/" + id);
	};

	return {
		getTarefas: _getTarefas,
		saveTarefa: _saveTarefa,
		updateStatusTarefa: _updateStatusTarefa,
		deletaTarefa: _deletaTarefa
	};
});