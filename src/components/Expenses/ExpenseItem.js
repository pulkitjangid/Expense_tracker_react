import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    const eventHandler = () =>{
        setTitle('Updated Name')
    }

    return (
        <li>
        <Card className="expense-item" >
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
            <button onClick={eventHandler} >Change Item</button>
        </Card>
        </li>
    )
}

export default ExpenseItem;