angular
.module('app.controllers')
.controller('RecoveryCtrl', function($scope, $state, $ionicLoading,  $ionicPopup, UsuarioService) {
  $scope.usuario = {};

  $scope.recovery = function() {
    $ionicLoading.show();

    UsuarioService
    .recovery($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(response) {
    $ionicPopup.alert({
      title: 'Recovery',
      template: 'Sua nova senha foi enviada para seu email.'
    });
    $scope.usuario = {};
    $state.go('login');
  }

  function _error(err) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim',
      template: _getErrors(err)
    });
  }

  function _finally() {
    $ionicLoading.hide();
  }

  function _getErrors(err) {
    return err.data.map(function(error) {
      return error.msg;
    }).join("<br>");
  }
})