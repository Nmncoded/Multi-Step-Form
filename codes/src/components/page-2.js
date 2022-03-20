function PageTwo (props){
    if(props.step !== 2 )return;
    return (
        <>
            <div className="message-field">
                <label htmlFor="message">Message</label>
                <textarea onChange={props.handleInput()} id="message" name="message" value={props.message} rows="10" placeholder="Type your message" ></textarea>
            </div>
            <div className="select-choice">
                <div>
                    <input id="one" type="checkbox" name="firstStatus" checked={props.firstStatus} onChange={props.handleCheck()} />
                    <label htmlFor="one" >The number one choice</label>
                </div>
                <div>
                    <input id="two" type="checkbox" name="secondStatus" checked={props.secondStatus} onChange={props.handleCheck()} />
                    <label htmlFor="two" >The number two choice</label>
                </div>
            </div>
        </>
    )
}

export default PageTwo;