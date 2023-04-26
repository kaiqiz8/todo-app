import { useState } from 'react';
import './Counter.css'
import { getByLabelText } from '@testing-library/react';
import {PropTypes} from 'prop-types';
export default function Counter({by}) {

    // const buttonStyle = {
    //     fontSize:"16px",
    //     backgroundColor: "#00a5ab",
    //     width: "100px",
    //     margin: "10px",
    //     color: "white",
    //     padding: "15px",
    //     borderRadius: "30px"};

    const [count, setCount] = useState(0);
    console.log(by);

    function incrementCounterFunction() {
        setCount(count + by);
        console.log(count);
        console.log('increment clicked');
    };

    function decrementCounterFunction() {
        setCount(count - by);
        console.log(count);
        console.log('decrement clicked');
    }
    return (
        <div className="counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                        // style={buttonStyle}
                > + {by}</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                        // style={buttonStyle}
                > - {by}</button>
            </div>

            
        
        </div>
    )
     
}

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 5
}