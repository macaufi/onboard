'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

require('regenerator-runtime/runtime');

var onboard = require('./onboard-c18530fc.js');

require('bignumber.js');

require('bnc-sdk');

require('bowser');

var Web3ProviderEngine = _interopDefault(require('web3-provider-engine'));

var RpcSource = _interopDefault(require('web3-provider-engine/subproviders/rpc'));

var HookedWalletSubprovider = _interopDefault(require('web3-provider-engine/subproviders/hooked-wallet'));

var SubscriptionSubprovider = _interopDefault(require('web3-provider-engine/subproviders/subscriptions'));

var FilterSubprovider = _interopDefault(require('web3-provider-engine/subproviders/filters'));

function createProvider(config) {
  var getAccounts = config.getAccounts,
      signTransaction = config.signTransaction,
      rpcUrl = config.rpcUrl,
      processMessage = config.processMessage,
      processPersonalMessage = config.processPersonalMessage,
      signMessage = config.signMessage,
      signPersonalMessage = config.signPersonalMessage;
  var pollingInterval = onboard.get_store_value(onboard.app).blockPollingInterval;
  var idMgmt = getAccounts && new HookedWalletSubprovider({
    getAccounts: getAccounts,
    signTransaction: signTransaction,
    processMessage: processMessage,
    processPersonalMessage: processPersonalMessage,
    signMessage: signMessage,
    signPersonalMessage: signPersonalMessage
  });
  var rpcSubProvider = new RpcSource({
    rpcUrl: rpcUrl.includes('http') ? rpcUrl : "https://".concat(rpcUrl)
  });
  var provider = new Web3ProviderEngine({
    pollingInterval: pollingInterval
  });
  provider.addProvider(new SubscriptionSubprovider());
  provider.addProvider(new FilterSubprovider());
  idMgmt && provider.addProvider(idMgmt);
  provider.addProvider(rpcSubProvider);
  provider.start();
  provider.on('error', console.error);
  return provider;
}

exports["default"] = createProvider;