import './ExpenseDate.css'

function ExpenseDate(props) {
    const bulan =props.tanggal.toLocaleString('id-ID',{month:'long'})
    const tanggal =props.tanggal.toLocaleString('id-ID',{day:'2-digit'})
    const tahun=props.tanggal.getFullYear()
    return(
        <div className={'expense-date'}>
            <div className={'expense-date__day'}>Tanggal: {tanggal}</div>
            <div className={'expense-date__month'}>Bulan: {bulan}</div>
            <div className={'expense-date__year'}>Tahun: {tahun}</div>
        </div>
    );
}
export default ExpenseDate