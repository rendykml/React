
initialData = {
    nama: '',
    kelas: '',
    alamat: '',
    npm: ''

}

export default function contact() {

    const [contact, setContact] = useState(initialData);
        function handleNamaChange(e) {
            setContact({
                ...contact,
                nama: e.target.value
            })
        }
        function handleKelasChange(e) {
            setContact({
                ...contact,
                kelas: e.target.value
            })
        }
        function handleAlamatChange(e) {
            setContact({
                ...contact,
                alamat: e.target.value
            })
        }
        function handleNpmChange(e) {
            setContact({
                ...contact,
                npm: e.target.value
            })
        }
    return(   
        <div>
            <h1>Input Data Mahasiswa</h1>
            <form >
                <input type="text" placeholder="nama" value={contact.nama} onChange={handleNamaChange} /> <br />
                <input type="text" placeholder="kelas" value={contact.kelas} onChange={handleKelasChange} /> <br />
                <input type="text" placeholder="alamat" value={contact.name} onChange={handleAlamatChange} /> <br />
                <input type="number" placeholder="npm" value={contact.name} onChange={handleNpmChange} />

            </form>
            <h1>Inputan : </h1>
            <p>Nama: {contact.nama}</p>
            <p>Kelas: {contact.kelas}</p>   
            <p>Alamat: {contact.alamt}</p>
            <p>Npm: {contact.npm}</p>
        </div>
    )
}