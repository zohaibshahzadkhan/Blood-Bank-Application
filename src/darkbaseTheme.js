import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan700,
  grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

//Custom Theme to change UI at application level
const darkBaseTheme = getMuiTheme({
  palette: {
    // primary1Color: cyan700,
    primary1Color:'#FF6F00',
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: '#FF6F00',
    accent2Color: pinkA400,
    accent3Color: '#FF6F00',
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    // alternateTextColor: '#303030',
    alternateTextColor: '##FAFAFA',
    canvasColor: '#303030',
    borderColor: grey600,
    // borderColor: fade('#C2185B', 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },

});

function AppTheme(){
  return getMuiTheme(darkBaseTheme);
  //return CustomTheme;
}


export default AppTheme();

