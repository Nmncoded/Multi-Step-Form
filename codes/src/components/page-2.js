function PageTwo (props){
    if(props.step !== 2 )return;
    console.log(props.firstStatus,props.secondStatus);
    return (
        <>
            <div className="message-field">
                <label htmlFor="message">Message</label>
                <textarea onChange={props.handleInput()} id="message" name="message" value={props.message} rows="10" placeholder="Type your message..." ></textarea>
            </div>
            <div className="select-choice">
                <div>
                    <input id="firstStatus" type="checkbox" name="firstStatus" value={props.firstStatus} onChange={props.handleCheck()} />
                    <label htmlFor="firstStatus" >The number one choice</label>
                    <input id="secondStatus"type="checkbox" name="secondStatus" value={props.secondStatus} onChange={props.handleCheck()} />
                    <label htmlFor="secondStatus">The number two choice</label>
                </div>
            </div>
        </>
    )
}

export default PageTwo;