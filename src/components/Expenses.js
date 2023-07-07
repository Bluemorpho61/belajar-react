import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(isi) {
    const banyak =isi.isi.map(jumlah=><ExpenseItem props={jumlah} tanggal={jumlah.tanggal}/>)
    return(
        <div className={"expenses"}>
            {banyak}
        </div>
    )
}


export default Expenses