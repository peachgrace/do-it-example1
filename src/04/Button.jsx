import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from './withStyles';
class Button extends PureComponent {
    render(){
        const{children, disabled, styles,
            large, xlarge, small, xsmall, primary, secondary,
            onPress,} =this.props;
        return(
<Button  {...css(styles.default,
    xsmall && styles.xsmall,
    small && styles.small,
    large && styles.large,
    xlarge && styles.xlarge,
    secondary && styles.secondary,
    primary && styles.primary,)} onClick={onPress}>
    {children}
</Button>

        );
    }
}
Button.PropTypes = {
children: PropTypes.node.isRequired,
onpress: PropTypes.func,
small: PropTypes.bool,
xsmall: PropTypes.bool,
large: PropTypes.bool,
xlarge: PropTypes.bool,
secondary: PropTypes.bool,
primary: PropTypes.bool,
};
Button.defaultProps = {
    onPress: ()=>{},
    xsmall: false,
    small: false,
    large: false,
    xlarge: false,
    secondary: false,
    primary: false,
};
export default withStyles(({color, size, unit})=> ({
    default: {
        border: 1,
        borderStyle: 'solid',
        borderColor: color.default,
        borderRadius: 2,
        color: color.default,
        fontSize: size.md,
        padding: unit*2,
        cursor: 'pointer',
    },
    xlarge:{
        fontSize: size.xg,
    },
    large:{
        fontSize: size.lg,
    },
    small: {
        fontSize: size.sm,
        padding: unit,
    },
    xsmall: {
        fontSize: size.xs,
        padding: unit,
    },
    primary:{
        borderColor: color.primary,
        color: color.white,
        backgroundColor: color.primary,

    },
    secondary:{
        color: color.secondary,
        borderColor: color.secondary,
    },
}))(Button);