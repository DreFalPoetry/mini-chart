'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label;

  if (active) {
    return _react2.default.createElement(
      'div',
      { className: 'custom-tooltip' },
      _react2.default.createElement(
        'div',
        { className: 'label' },
        '' + payload[0].payload.name
      ),
      _react2.default.createElement(
        'div',
        null,
        payload[0].value + '%'
      )
    );
  }

  return null;
};

var ReAreaCharts = function (_PureComponent) {
  _inherits(ReAreaCharts, _PureComponent);

  function ReAreaCharts() {
    _classCallCheck(this, ReAreaCharts);

    return _possibleConstructorReturn(this, (ReAreaCharts.__proto__ || Object.getPrototypeOf(ReAreaCharts)).apply(this, arguments));
  }

  _createClass(ReAreaCharts, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          axis_x = _props.axis_x,
          tooltip = _props.tooltip,
          strokeColor = _props.strokeColor,
          fillColor = _props.fillColor,
          width = _props.width,
          height = _props.height;

      var chartData = [];
      if (data && data.length) {
        chartData = data.map(function (v, index) {
          return { "name": axis_x[index], "point": v };
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'miniChartWrapper' },
        chartData && chartData.length ? _react2.default.createElement(
          _recharts.AreaChart,
          {
            width: width || 100,
            height: height || 35,
            data: chartData,
            margin: {
              top: 0, right: 0, left: 0, bottom: 0
            }
          },
          tooltip ? _react2.default.createElement(_recharts.Tooltip, { content: _react2.default.createElement(CustomTooltip, null) }) : null,
          _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'point', stroke: strokeColor || "#556cd6", fill: fillColor || "#40a9ff", fillOpacity: 1 })
        ) : '--'
      );
    }
  }]);

  return ReAreaCharts;
}(_react.PureComponent);

exports.default = ReAreaCharts;