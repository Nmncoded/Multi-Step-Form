import {FaHiking} from 'react-icons/fa';
import {FaUserSecret} from 'react-icons/fa'

function PageThree (props){
    if(props.step !== 3 )return;
    return (
        <>
            <div className="page3-checkbox">
                <button><FaHiking /></button>
                <button><FaUserSecret /></button>
            </div>
            <div className="select-choice-3">
                <div>
                    <input  type="checkbox" name="firstOption" value={props.firstOption} onChange={props.handleCheck()} />
                    <label > I want to add this option</label>
                </div>
                <div>
                    <input type="checkbox" name="secondOption" value={props.secondOption} onChange={props.handleCheck()} />
                    <label >Let me click on this checkbox and choose some cool stuf.</label>
                </div>
            </div>
        </>
    )
}

export default PageThree;