import Expenses from "./components/Expenses";

function App() {
    const tanggal =new Date();

    // Data Dummy
    const transaksi =[
        {
            nama :"Pentol bakar",
            harga:4000,
            tanggal: tanggal
        },
        {
            nama :"Ayam geprek",
            harga:7000,
            tanggal: tanggal
        },

        {
            nama :"Perkedel",
            harga:2000,
            tanggal: tanggal
        },
        {
            nama :"Sate Usus",
            harga:12000,
            tanggal: tanggal
        },
        {
            nama:"Sate Kambing",
            harga: 17000,
            tanggal: tanggal
        }
    ]
  return (
    <div>
      <h1>Belajar React</h1>
        <div>
            <Expenses isi={transaksi} tanggal={tanggal}/>
        </div>
    </div>
  );
}

export default App;
