import PageOne from './page-1';
import PageTwo from './page-2';
import PageThree from './page-3';
import React from 'react';

class MainForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            firstStatus: false,
            secondStatus: false,
            currentStep : 1,
            firstName: "",
            lastName:"",
            email:"",
            birthDate: 0,
            address: "",
            errors:{
                email:"",
            }
        }
    }
    handleInput = ({target}) => {
        let {name,value} = target;
        // console.log(value)
        let errors = this.state.errors;
        switch (name){
            case "email": errors.email  = this.validateEmail(value) ? "" : "Error Message"
                break;
            default:
                break;
        }

        this.setState(() => {
            return {
                [name]: value,
            }
        })
    }
    handleCheck = ({target}) => {
        let {name} = target;
        this.setState(() => {
            return {
                [name]: !this.state[name],
            }
        })
    }
    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    getPage = () => {
        let step = this.state.currentStep;
        if(step === 1){
            return <PageOne
                    handleInput={() => this.handleInput} 
                    step={this.state.currentStep}
                    first={this.state.firstName}
                    last={this.state.lastName}
                    email={this.state.email}
                    error={this.state.errors.email}
                    bDate={this.state.birthDate}  />
                    
        }else if(step === 2){
            return <PageTwo 
                    handleInput={() => this.handleInput} 
                    step={this.state.currentStep}
                    message={this.state.message}
                    firstStatus={this.state.firstStatus}
                    secondStatus={this.state.secondStatus}
                    handleCheck={() => this.handleCheck}/>
        }else{
            return <PageThree
                    handleInput={() => this.handleInput} 
                    step={this.state.currentStep} />
        }
    }
    handleClick = (name) => {
        if(name === "back"){
            this.setState((prevState) => {
                return {
                    currentStep : prevState.currentStep - 1
                }
            })
        }else{
            this.setState((prevState) => {
                return {
                    currentStep : prevState.currentStep + 1
                }
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // alert("data added");
    }
    render(){
        let imgArr= [
            "https://images.unsplash.com/photo-1581345628965-064148e704a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2tldGNoJTIwJTIwZm9ybSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1601921004897-b7d582836990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2tldGNoJTIwJTIwZm9ybSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1574169207690-b8c8d91fa4ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNrZXRjaCUyMCUyMGZvcm0lMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ]
        return <>
                <section className='main-section'>
                    <aside className='aside-img'>
                        <img src={imgArr[this.state.currentStep - 1]} alt={this.state.currentStep} />
                    </aside>
                    <form onClick={this.handleSubmit} >
                        <header className='f-header'>
                            {
                                ["Sign Up","Message","Checkbox"].map((value,index) => {
                                    return (
                                        <div key={index+1} >
                                            <span className={this.state.currentStep === index+1 ? "blue" : ""}> {index+1}</span>
                                            {value}
                                        </div>
                                    )
                                })
                            }
                        </header>
                        <section className='middle-section'>
                            <h1>step {this.state.currentStep}/3</h1>
                            <h2>
                            {
                                ["Sign UP","Message","Checkbox"].find((value,index) => (this.state.currentStep === index+1))
                            }
                            </h2>
                            {
                                this.getPage()
                            }
                        </section>
                        <div className='bottom-btns' >
                            <button className={this.state.currentStep === 1 ? "hidden" : ""} onClick={ () => this.handleClick("back")} >Back</button>
                            <div>
                                <button className={this.state.currentStep === 3 ? "hidden" : ""} onClick={ () => this.handleClick("next")} >Next</button>
                                {
                                    (this.state.currentStep === 3) ? <input onClick={this.handleSubmit} type="submit" value="submit" /> : ""
                                }
                            </div>
                        </div>
                    </form>
                </section>
            </>
    }
}


export default MainForm;