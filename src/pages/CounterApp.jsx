import { Button } from "../components/Button"
import Message from "../components/Message"
import React,{useState} from "react";

export const CounterApp = ()=>{
    const [count, setCount ] = useState(0);

    const plus = ()=>{
        // count++;
        setCount(count+1);
        console.log('plus',count);
    }

    const minus= ()=>{
        // count--;
        setCount(count-1);
        console.log('minus',count);
    }

    return( <div className="container">
        <Message val="Counter App" color="alert alert-primary text-center" ></Message>
        <Message val="Counter Value is " color="alert alert-light" count={count}></Message>
        <Button fn={plus} val= "+" color="btn btn-primary"></Button> &nbsp;
        <Button fn={minus} val= "-" color = "btn btn-primary"></Button>
    </div> )
}