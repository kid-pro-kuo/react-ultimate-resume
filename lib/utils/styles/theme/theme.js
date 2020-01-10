"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTheme = void 0;

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _theme_schema = require("./theme_schema");

var _theme_transforms = require("./theme_transforms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_PALETTE = Object.freeze({
  primary: {
    50: '#e4e2f5',
    100: '#bdb6e6',
    200: '#9185d5',
    300: '#6454c4',
    400: '#4330b8',
    500: '#220bab',
    600: '#1e0aa4',
    700: '#19089a',
    800: '#140691',
    900: '#0c0380',
    contrastDefaultColor: 'light'
  },
  secondary: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    contrastDefaultColor: 'light'
  },
  tertiary: {
    50: '#fefce4',
    100: '#fdf8bb',
    200: '#fcf38e',
    300: '#faee60',
    400: '#f9eb3e',
    500: '#f8e71c',
    600: '#f7e419',
    700: '#f6e014',
    800: '#f5dd11',
    900: '#f3d709',
    contrastDefaultColor: 'light'
  },
  dark: {
    50: '#efefef',
    100: '#c1c1c1',
    200: '#979797',
    300: '#6d6d6d',
    400: '#4e4e4e',
    500: '#2f2f2f',
    600: '#2a2a2a',
    700: '#232323',
    800: '#1d1d1d',
    900: '#000',
    contrastDefaultColor: 'light'
  },
  light: {
    500: '#fff',
    contrastDefaultColor: 'dark'
  }
});
var DEFAULT_THEME = Object.freeze({
  palette: DEFAULT_PALETTE,
  miscellaneous: {
    backgroundColor: DEFAULT_PALETTE.dark[50],
    color: DEFAULT_PALETTE.dark[500],
    fontFamily: ['Avenir Next', 'Open Sans', 'Roboto', 'Arial'],
    spacing: 8,
    rounding: 8
  },
  components: {
    banner: {
      overlayColor: 'primary',
      imageSrc: 'https://source.unsplash.com/random/4000x2000'
    },
    cards: {
      default: {
        backgroundColor: 'dark',
        color: 'light'
      },
      variants: [['primary', 'light'], ['tertiary', 'primary'], ['light', 'secondary'], ['secondary', 'light'], ['light', 'primary']].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            backgroundColor = _ref2[0],
            color = _ref2[1];

        return {
          backgroundColor: backgroundColor,
          color: color
        };
      })
    }
  }
});

var mergeFunction = function mergeFunction(objValue, srcValue) {
  if ((0, _isArray.default)(objValue)) {
    return srcValue;
  }

  return objValue;
};

var buildTheme =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(theme) {
    var merged;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            merged = (0, _mergeWith.default)((0, _cloneDeep.default)(DEFAULT_THEME), theme, mergeFunction);
            _context.prev = 1;
            _context.next = 4;
            return _theme_schema.THEME_SCHEMA.validate(merged, {
              palette: merged === null || merged === void 0 ? void 0 : merged.palette
            });

          case 4:
            return _context.abrupt("return", (0, _theme_transforms.transformTheme)(merged));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error('Invalid theme! Using default theme instead.', {
              error: _context.t0
            });
            return _context.abrupt("return", DEFAULT_THEME);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function buildTheme(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.buildTheme = buildTheme;