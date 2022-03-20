function PageOne (props){
    // console.log(props);
    if(props.step !== 1 )return;
    return (
        <>
            <div className="name-sec">
                <div>
                <label htmlFor="first">First Name</label>
                <input type="text" onChange={props.handleInput()} id="first" name="firstName" value={props.first} placeholder="First Name" />
                </div>
                <div>
                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" onChange = {props.handleInput()} name="lastName" value={props.last} placeholder="Last Name" />
                </div>
            </div>
            <div className="email-sec">
                <div>
                <label htmlFor="date">Date of Birth</label>
                <input type="date" id="date" onChange={props.handleInput()} name="birthDate" value={props.bDate}  />
                </div>
                <div>
                <label  className={props.error ? "err" : ""} htmlFor="email">Email Address</label>
                <input className={props.error ? "error" : ""}  type="email" id="email" onChange={props.handleInput()} name="email" value={props.email} placeholder="Email" />
                <span className={props.error ? "err" : ""} >{props.error ? props.error : ""}</span>
                </div>
            </div>
            <div className="address">
                <label htmlFor="address">Address</label>
                <input type="address" id="address" onChange={props.handleInput()} name="address" value={props.address} placeholder="Sirdar Rd, Notting Hill, London W11 4EE, United Kingdom" />
            </div>
        </>
    )
}

export default PageOne;