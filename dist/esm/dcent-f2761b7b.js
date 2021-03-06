function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { e as extensionInstallMessage } from './content-60ae07c5.js';
var dcentIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"\uAD6C\uC131_\uC694\uC18C_171_4\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 62.27 71.11\" style=\"enable-background:new 0 0 62.27 71.11;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#B3B5B5;}\n\t.st1{fill:#72BFBC;}\n\t.st2{fill:#6D6E70;}\n</style>\n<g>\n\t<polygon class=\"st0\" points=\"32.04,13.43 37.34,10.37 37.34,3.06 32.04,0 32.04,0 \t\"/>\n\t<path class=\"st1\" d=\"M12.53,45.25V24.69l17.71-10.22V0L0.9,16.94C0.34,17.26,0,17.86,0,18.5v33.88c0,0.03,0.01,0.07,0.01,0.1\n\t\tL12.53,45.25z\"/>\n\t<path class=\"st2\" d=\"M48.86,46.69L31.14,56.93L13.52,46.75L0.99,53.99l29.25,16.89c0.28,0.16,0.59,0.24,0.9,0.24\n\t\tc0.31,0,0.62-0.08,0.9-0.24l29.34-16.94c0.01,0,0.01-0.01,0.02-0.01L48.86,46.69z\"/>\n\t<g>\n\t\t<path class=\"st0\" d=\"M61.38,16.94l-11.63-6.71v7.3l-12.5,7.22l12.5,7.21v13.16l12.53,7.23V18.5\n\t\t\tC62.27,17.86,61.93,17.26,61.38,16.94z\"/>\n\t</g>\n\t<polygon class=\"st2\" points=\"24.93,31.85 24.94,46.18 37.1,39.16 37.1,24.83 \t\"/>\n</g>\n</svg>\n";

function dcent(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  var url = window.location.origin || window.location.host;
  var encodedUrl = encodeURIComponent(url);
  return {
    name: label || "D'CENT",
    svg: svg || dcentIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createModernProviderInterface, createLegacyProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface, createLegacyProviderInterface = helpers.createLegacyProviderInterface;
                provider = window.ethereum || window.web3 && window.web3.currentProvider;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": provider && getProviderName(provider) === "D'CENT" ? typeof provider.enable === 'function' ? createModernProviderInterface(provider) : createLegacyProviderInterface(provider) : null
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://link.dcentwallet.com/DAppBrowser/?url=' + encodedUrl,
    installMessage: extensionInstallMessage,
    mobile: true,
    preferred: preferred
  };
}

export default dcent;