import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent{

    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, onChange} = this.props;
        if(onChange){
            onchange(name, e.target.value);
        }
    }
    componentDidMount(){
        if(this.props.autoFocus){
            this.refs.focus();
        }
    }
    componentDidUpdate(){
        if(this.props.autoFocus){
            this.refs.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }
    render(){
        const { errorMessage, label, name, value, type, onFocus} = this.props;
        return (
            <div className="input-field">
                <input id={`input_${name}`}
                className = {`validate ${errorMessage && 'invalid'}`}
                ref = {this.setRef}
                type={type}
                onChange={this.handleChange}
                value={value}
                />
            <label className="active" for={`input_${name}`}>
                {label}
                </label>
                {errorMessage && <span className="helper-text" data-error={errorMessage}>{errorMessage}</span>}</div>
            
        );
    }
}

Input.PropTypes = {
    type : PropTypes.oneOf(['text', 'number', 'price']),//type는 이 3개 중 하나의 값만 가질 수 있다.
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage : PropTypes.string,
    label : PropTypes.string,
    onChange : PropTypes.func,
    onFocus : PropTypes.func,
    autoFocus : PropTypes.bool,
};
Input.defaultProps = {
    onchange : () => {},
    onFocus : () => {},
    autoFocus : false,
    type: 'text', //type의 기본값은 text
};

export default Input;