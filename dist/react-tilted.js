function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var VanillaTilt = _interopDefault(require('vanilla-tilt'));

function noop() {}

var defaultStyle = {};

var Tilt = /*@__PURE__*/(function (PureComponent) {
  function Tilt() {
    var this$1 = this;

    PureComponent.call(this);

    this.initInstance = function () {
      var ref = this$1.props;
      var reverse = ref.reverse;
      var max = ref.max;
      var startX = ref.startX;
      var startY = ref.startY;
      var perspective = ref.perspective;
      var scale = ref.scale;
      var speed = ref.speed;
      var transition = ref.transition;
      var axis = ref.axis;
      var reset = ref.reset;
      var easing = ref.easing;
      var glare = ref.glare;
      var maxGlare = ref.maxGlare;
      var glarePrerender = ref.glarePrerender;
      var mouseEventElement = ref.mouseEventElement;
      var gyroscope = ref.gyroscope;
      var gyroscopeMinAngleX = ref.gyroscopeMinAngleX;
      var gyroscopeMaxAngleX = ref.gyroscopeMaxAngleX;
      var gyroscopeMinAngleY = ref.gyroscopeMinAngleY;
      var gyroscopeMaxAngleY = ref.gyroscopeMaxAngleY;
      var onTiltChange = ref.onTiltChange;
      this$1.instance = VanillaTilt.init(this$1.ref.current, {
        reverse: reverse,
        max: max,
        startX: startX,
        startY: startY,
        perspective: perspective,
        scale: scale,
        speed: speed,
        transition: transition,
        axis: axis,
        reset: reset,
        easing: easing,
        glare: glare,
        maxGlare: maxGlare,
        glarePrerender: glarePrerender,
        mouseEventElement: mouseEventElement,
        gyroscope: gyroscope,
        gyroscopeMinAngleX: gyroscopeMinAngleX,
        gyroscopeMaxAngleX: gyroscopeMaxAngleX,
        gyroscopeMinAngleY: gyroscopeMinAngleY,
        gyroscopeMaxAngleY: gyroscopeMaxAngleY
      });
      this$1.ref.current.addEventListener('tiltChange', onTiltChange);
    };

    this.ref = React.createRef();
  }

  if ( PureComponent ) Tilt.__proto__ = PureComponent;
  Tilt.prototype = Object.create( PureComponent && PureComponent.prototype );
  Tilt.prototype.constructor = Tilt;

  Tilt.prototype.componentDidUpdate = function componentDidUpdate () {
    if (this.ref.current.vanillaTilt) {
      this.ref.current.vanillaTilt.destroy();
      this.ref.current.removeEventListener('tiltChange', this.props.onTiltChange);
      this.initInstance();
    }
  };

  Tilt.prototype.componentDidMount = function componentDidMount () {
    this.initInstance();
  };

  Tilt.prototype.render = function render () {
    var ref = this.props;
    var children = ref.children;
    var className = ref.className;
    var style = ref.style;
    return React__default.createElement( 'div', { ref: this.ref, className: className, style: style },
        children
      );
  };

  return Tilt;
}(React.PureComponent));

Tilt.defaultProps = {
  className: '',
  style: defaultStyle,
  reverse: false,
  // reverse the tilt direction
  max: 35,
  // max tilt rotation (degrees)
  startX: 0,
  // the starting tilt on the X axis, in degrees.
  startY: 0,
  // the starting tilt on the Y axis, in degrees.
  perspective: 1000,
  // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,
  // 2 = 200%, 1.5 = 150%, etc..
  speed: 300,
  // Speed of the enter/exit transition
  transition: true,
  // Set a transition on enter/exit.
  axis: null,
  // What axis should be disabled. Can be X or Y.
  reset: true,
  // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  // Easing on enter/exit.
  glare: false,
  // if it should have a "glare" effect
  maxGlare: 1,
  // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  glarePrerender: false,
  // false = VanillaTilt creates the glare elements for you, otherwise
  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  mouseEventElement: null,
  // css-selector or link to HTML-element what will be listen mouse events
  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  gyroscope: true,
  // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX: -45,
  // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX: 45,
  // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY: -45,
  // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY: 45,
  // This is the top limit of the device angle on Y axis, meaning that a device rotated at
  onTiltChange: noop
};

module.exports = Tilt;
