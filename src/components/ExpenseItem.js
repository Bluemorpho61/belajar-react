import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

    return (
        <div className={"expense-item"}>
            {/*<div>Tanggal: {props.tanggal}</div>*/}
           <ExpenseDate tanggal={props.tanggal}/>
            <div>
                <h2 className={"expense-item__description"}>{props.props.nama}</h2>
            </div>
            <div>
                <p className={"expense-item__price"}>Rp. {props.props.harga}</p>
            </div>
        </div>
    )
}

export default ExpenseItem