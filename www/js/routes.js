angular
.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('menu-fornecedor', {
    abstract: true,
    url: '/menu-fornecedor',
    templateUrl: 'templates/fornecedor/menu.html',
    controller: 'MenuFornecedorCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl'
  })

  .state('recovery', {
    url: '/recovery',
    templateUrl: 'templates/recovery.html',
    controller: 'RecoveryCtrl'
  })

  .state('menu-fornecedor.home', {
    url: '/home-fornecedor',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/home.html',
        controller: 'HomeFornecedorCtrl'
      }
    }
  })

  .state('menu-fornecedor.veiculos', {
    url: '/veiculos',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/veiculos.html',
        controller: 'VeiculosCtrl'
      }
    }
  })

  .state('menu-fornecedor.veiculo', {
    url: '/veiculo/:vei_cd_veiculo',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/veiculo.html',
        controller: 'VeiculoCtrl'
      }
    }
  })

  .state('menu-fornecedor.changePass', {
    url: '/changePass',
    views: {
      'navigationView': {
        templateUrl: 'templates/generic/change-pass.html',
        controller: 'ChangePassCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/login');
});
