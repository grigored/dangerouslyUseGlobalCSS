import {
    createGenerateClassName,
    createMuiTheme,
    MuiThemeProvider,
    withStyles,
} from '@material-ui/core/styles';
import * as React from 'react';
// @ts-ignore
import JssProvider from 'react-jss/lib/JssProvider';


const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: true,
    productionPrefix: 'c',
});

const styles = () => ({
    root: {
        backgroundColor: 'red',
    },
});

class ASDQ extends React.PureComponent<any, {}> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>abc2</div>
        );
    }
}

const B = withStyles(styles)(ASDQ);

export default () => (
    <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={createMuiTheme()}>
            <B/>
        </MuiThemeProvider>
    </JssProvider>
);
