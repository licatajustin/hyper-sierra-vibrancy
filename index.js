// Constants
const backgroundColor = 'rgba(4, 9, 15, 0.75)';
const foregroundColor = '#cbcfd4';

// Colors
const RED = '#de4f55';
const GREEN = '#38dec9';
const YELLOW = '#f0c981';
const BLUE = '#81629e';
const MAGENTA = '#dbbfe3';
const LIGHT_GRAY = '#f2f2f2';
const DARK_GRAY = '#596a86'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = YELLOW;
const borderColor = backgroundColor;

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
        background: ${backgroundColor} !important;
      }
      .header_header {
        background: rgba(4, 9, 15, 0.1) !important;
      }
      .splitpane_divider {
        background-colo4, 9, 15, 0.35) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${BLUE};
      }
    `
  })
}
