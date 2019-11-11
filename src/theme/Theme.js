import { createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,
    secondary: {main: '#19857b'},
    error: red,
    text: {
      primary: "#000"
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;