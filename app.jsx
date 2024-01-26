let validColor = "rgba(111,255,0,0.25)";let invalidColor = "rgba(255,120,120,0.25)";class LabelText extends React.Component{    constructor(props) {        super(props);        this.state = {value: props.value};    }    render() {        return (            <p style={{fontFamily:"Atkinson Hyperlegible", fontSize:14, padding:0, margin:0}}>{this.state.value}</p>        );    }}class NameField extends React.Component {    constructor(props) {        super(props);        let isValid = this.validate(props.value);        this.state = {value: props.value, valid: isValid};        this.onChange = this.onChange.bind(this);    }    validate(value){        return value.length > 2;    }    onChange(e) {        let value = e.target.value;        let isValid = this.validate(value);        this.setState({value: value, valid: isValid});    }    render() {        let colorName = this.state.valid === true?validColor:invalidColor;        return <p>            <LabelText value={"Full user name"}></LabelText>            <input type="text"                   value={this.state.value}                   onChange={this.onChange}                   style={{backgroundColor:colorName, border:"solid 1px grey"}} />        </p>    }}class AgeField extends React.Component {    constructor(props) {        super(props);        let isValid = this.validate(props.value);        this.state = {value: props.value, valid: isValid};        this.onChange = this.onChange.bind(this);    }    validate(value){        return value >= 10;    }    onChange(e) {        let value = e.target.value;        let isValid = this.validate(value);        this.setState({value: value, valid: isValid});    }    render() {        let colorAge = this.state.valid===true?validColor:invalidColor;        return <p>            <LabelText value={"User age"}></LabelText>            <input type="number"                   value={this.state.value}                   onChange={this.onChange}                   style={{backgroundColor:colorAge, border:"solid 1px grey"}} />        </p>    }}class UserForm extends React.Component {    constructor(props) {        super(props);        this.handleSubmit = this.handleSubmit.bind(this);        this.nameField = React.createRef();        this.ageField = React.createRef();    }    handleSubmit(e) {        e.preventDefault();        let name = this.nameField.current.state.value;        let age = this.ageField.current.state.value;        if(this.nameField.current.state.valid && this.ageField.current.state.valid){            alert(`Name: ${name}, Age: ${age}`);        }        else {            alert("Wrong data!")        }    }    render() {        return (            <form onSubmit={this.handleSubmit}>                <NameField value="N" ref={this.nameField} />                <AgeField value="10" ref={this.ageField} />                <input type="submit" value="Send" />            </form>        );    }}ReactDOM.createRoot(        document.getElementById("app")    )    .render(        <UserForm></UserForm>    );