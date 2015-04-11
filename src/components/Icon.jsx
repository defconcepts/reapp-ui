var React = require('react/addons');
var Component = require('../component');

module.exports = Component({
  name: 'Icon',

  propTypes: {
    size: React.PropTypes.number,
    name: React.PropTypes.string,
    color: React.PropTypes.string,
    stroke: React.PropTypes.number,
    isInTitleBar: React.PropTypes.bool,
    isInViewList: React.PropTypes.bool,
    shapeRendering: React.PropTypes.string,
    viewBox: React.PropTypes.string,
    crisp: React.PropTypes.bool
  },

  mixins: [
    React.addons.PureRenderMixin
  ],

  getDefaultProps() {
    return {
      size: 32,
      stroke: 1,
      viewBox: '0 0 64 64',
      color: 'currentColor',
      conditionalAnimations: {
        isInViewList: {
          self: 'iconTitleBar'
        }
      }
    };
  },

  render() {
    var {
      size,
      file,
      color,
      stroke,
      isInViewList,
      isInTitleBar,
      shapeRendering,
      viewBox,
      crisp,
      ...props
    } = this.props;

    if (!file)
      return null;

    if (color === 'currentColor')
      color = this.getConstant(
        isInTitleBar ? 'iconColorTitleBar' : 'iconColor');

    if (crisp)
      shapeRendering = 'crispEdges';

    this.addStyles({
      width: size,
      height: size,
      shapeRendering: shapeRendering ? shapeRendering : 'initial',
      fill: color
    });

    if (stroke)
      Object.assign(props, {
        stroke: color,
        strokeWidth: stroke * 2, // were scaling down from 64 / 2
        strokeLinecap: 'round'
      });

    if (isInTitleBar)
      this.addStyles('isInTitleBar');

    // center icon
    props.style = Object.assign({
      margin: 'auto',
    }, props.style);

    return (
      <div {...this.componentProps()}>
        <svg viewBox={viewBox} {...props}>
          <g dangerouslySetInnerHTML={{__html: file }} />
        </svg>
      </div>
    );
  }

});