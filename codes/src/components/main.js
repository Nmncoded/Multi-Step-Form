import PageOne from './page-1';
import PageTwo from './page-2';
import PageThree from './page-3';
import React from 'react';

class MainForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentStep : 1,
        }
    }
    getPage = () => {
        let step = this.state.currentStep;
        if(step === 1){
            return <PageOne />
        }else if(step === 2){
            return <PageTwo />
        }else{
            return <PageThree />
        }
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
                    <form>
                        <header className='f-header'>
                            {
                                ["Sign Up","Message","Checkbox"].map((value,index) => {
                                    return (
                                        <div>
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
                    </form>
                </section>
            </>
    }
}


export default MainForm;