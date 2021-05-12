'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

function _interopNamespace(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    var n = {};

    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function get() {
            return e[k];
          }
        });
      });
    }

    n['default'] = e;
    return n;
  }
}

var AirGapedKeyring = _interopDefault(require('@cvbb/eth-keyring'));

var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function cobovault(options) {
  var appName = options.appName,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'CoboVault',
    svg: svg,
    iconSrc: img,
    iconSrcSet: iconSrc || img$1,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return cobovaultProvider({
                  appName: appName,
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'CoboVault',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: [],
    preferred: preferred
  };
}

function cobovaultProvider(_x2) {
  return _cobovaultProvider.apply(this, arguments);
}

function _cobovaultProvider() {
  _cobovaultProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(options) {
    var EthereumTx, _yield$Promise, createProvider, BASE_PATH, networkId, rpcUrl, BigNumber, networkName, keyring, dPath, addressList, enabled, customPath, provider, disconnect, setPath, _setPath, isCustomPath, enable, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(message) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context10.next = 3;
                          break;
                        }

                        _context10.next = 3;
                        return enable();

                      case 3:
                        _context10.prev = 3;
                        return _context10.abrupt("return", keyring.signPersonalMessage(getPrimaryAddress(), message.data));

                      case 7:
                        _context10.prev = 7;
                        _context10.t0 = _context10["catch"](3);
                        throw _context10.t0;

                      case 10:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[3, 7]]);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x7) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(transactionData) {
                var transaction, signedTx;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context9.next = 3;
                          break;
                        }

                        _context9.next = 3;
                        return enable();

                      case 3:
                        transaction = new EthereumTx.Transaction(transactionData, {
                          chain: networkName(networkId)
                        });
                        _context9.prev = 4;
                        _context9.next = 7;
                        return keyring.signTransaction(getPrimaryAddress(), transaction);

                      case 7:
                        signedTx = _context9.sent;
                        return _context9.abrupt("return", "0x".concat(signedTx.serialize().toString('hex')));

                      case 11:
                        _context9.prev = 11;
                        _context9.t0 = _context9["catch"](4);
                        throw _context9.t0;

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[4, 11]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x6) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(getMore) {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (enabled) {
                          _context8.next = 2;
                          break;
                        }

                        return _context8.abrupt("return", []);

                      case 2:
                        if (!(keyring.getAccounts().length > 0 && !getMore)) {
                          _context8.next = 4;
                          break;
                        }

                        return _context8.abrupt("return", keyring.getAccounts());

                      case 4:
                        _context8.prev = 4;
                        _context8.next = 7;
                        return keyring.addAccounts(keyring.getAccounts().length + 5);

                      case 7:
                        addressList = _context8.sent;
                        _context8.next = 13;
                        break;

                      case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](4);
                        throw _context8.t0;

                      case 13:
                        return _context8.abrupt("return", addressList);

                      case 14:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[4, 10]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x4) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context7.sent;
                        return _context7.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return keyring.getCurrentAddress();
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              return keyring.setCurrentAccount(addressList.findIndex(function (addr) {
                return addr === address;
              }) || 0);
            };

            enable = function _enable() {
              if (enabled) {
                return _getAccounts();
              }

              return keyring.readKeyring().then(function () {
                enabled = true;
                return _getAccounts();
              });
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(path !== BASE_PATH)) {
                          _context6.next = 2;
                          break;
                        }

                        throw new Error("CoboVault only supports standard path: m/44'/0'/0'/0/x");

                      case 2:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              enabled = false;
              provider.stop();
            };

            _context11.next = 19;
            return new Promise(function (resolve) {
              resolve(_interopNamespace(require('ethereumjs-tx')));
            });

          case 19:
            EthereumTx = _context11.sent;
            _context11.next = 22;
            return new Promise(function (resolve) {
              resolve(require('./providerEngine-855381f1.js'));
            });

          case 22:
            _yield$Promise = _context11.sent;
            createProvider = _yield$Promise["default"];
            BASE_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName;
            keyring = AirGapedKeyring.getEmptyKeyring();
            dPath = '';
            addressList = Array.from([]);
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context11.abrupt("return", provider);

          case 45:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _cobovaultProvider.apply(this, arguments);
}

exports["default"] = cobovault;