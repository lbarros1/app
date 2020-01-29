import React, {Component} from 'react';

import SignUp from '../components/SignUp';

export default class SignUpScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    setEmail = (email)=>{
        this.setState({
            email: email
        })
    }

    setPassword = (password)=>{
        this.setState({
            password: password
        })
    }

    createUser = ()=>{
        console.log(this.state);
    }

    render(){
        return(
            <SignUp 
                 setPassword={this.setPassword} 
                 setEmail={this.setEmail} 
                 createUser={this.createUser} />
        );
    }
}