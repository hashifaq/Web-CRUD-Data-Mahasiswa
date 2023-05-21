'use client'
import { useState } from "react";
import { BiEdit, BiTrashAlt, BiUserPlus } from "react-icons/bi"

export default function Mahasiswa() {
  const [mahasiswas, setMahasiswas] = useState([]);
  const [nama, setNama] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [mahasiswaIdEdit, setMahasiswaIdEdit] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMahasiswa = {
      nama: nama,
      jenisKelamin: jenisKelamin,
      nim: nim,
      jurusan: jurusan,
      angkatan: angkatan,
      email: email,
      nohp: nohp,
      status: status,
      id: Date.now()
    };
    
    if (!nama || !nim || !jenisKelamin || !jurusan || !angkatan || !email || !nohp || !status ) {
      alert("Mohon isi data dengan benar");
      return;
    }

    setMahasiswas([...mahasiswas, newMahasiswa, ]);
    setNama("");
    setNim("");
    setJenisKelamin("");
    setJurusan("");
    setAngkatan("");
    setEmail("");
    setNohp("");
    setStatus("");
    setIsSubmitOpen(false);
    if(edit) {
      setEdit(false);
    }
  };

  const handleEdit = (id) => {
    setEdit(true);
    const mahasiswa = mahasiswas.find((mahasiswa) => mahasiswa.id === id);
    if (mahasiswa) {
      setNama(mahasiswa.nama);
      setNim(mahasiswa.nim);
      setJenisKelamin(mahasiswa.jenisKelamin);
      setJurusan(mahasiswa.jurusan);
      setAngkatan(mahasiswa.angkatan);
      setEmail(mahasiswa.email);
      setNohp(mahasiswa.nohp);
      setStatus(mahasiswa.status);
      setMahasiswaIdEdit(id);
      setEdit(true);
      setMahasiswas(mahasiswas.filter((mahasiswa) => mahasiswa.id != id));
    }
  };
  

  const handleDelete = (id) => {
    const updatedMahasiswas = mahasiswas.filter(
      (mahasiswa) => mahasiswa.id !== id
    );
    setMahasiswas(updatedMahasiswas);
  };

  const handleDeleteAll = () => {
    setMahasiswas([]);
  };

  return (
    <div className="flex flex-col m-[30px]">
      <div className="items-center justify-items-center">
        <h1 className="text-[40px] text-black text-center font-bold mb-3">Data Mahasiwa</h1>
      </div>
      <div className="items-center justify-items-center">
        <button onClick={() => { setIsSubmitOpen(true);}} className='flex bg-blue-200 items-start justify-items-start rounded-lg mb-4 transition-all ease-in-out duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-500 px-3 py-2 border rounded-md ml-5'>
              Add<span className='px-1'><BiUserPlus size={24}></BiUserPlus></span>
        </button>

          {isSubmitOpen || edit ? (
          <form className="grid lg:grid-cols-2 w-4/6 gap-4 mb-7">
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="NIM"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="Jenis Kelamin"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="Jurusan"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="Angkatan"
              value={angkatan}
              onChange={(e) => setAngkatan(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="No HP"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded py-2 px-3 mr-2"
            />
            {edit ? (
              <button
              onClick={handleSubmit}
              className="bg-emerald-300 items-start justify-items-start transition-all ease-in-out duration-300 hover:bg-emerald-400 hover:text-white text-black font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
            ) : (
              <button
              onClick={handleSubmit}
              className="bg-blue-200 items-start justify-items-start transition-all ease-in-out duration-300 hover:bg-blue-300 hover:text-white text-black font-bold py-2 px-4 rounded"
            >
              Tambah
            </button>
            )}
          </form>
          ) : ("") }
      
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Nama</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Jenis Kelamin</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">NIM</th>              
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Jurusan</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Angkatan</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Email</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">No HP</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Status</th>
              <th className="bg-gray-800 py-2 px-4 text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswas.map((mahasiswa) => (
              <tr key={mahasiswa.id} className="bg-gray-100 text-center">
                <td className="py-2 px-4">{mahasiswa.nama}</td>
                <td className="py-2 px-4">{mahasiswa.nim}</td>
                <td className="py-2 px-4">{mahasiswa.jenisKelamin}</td>
                <td className="py-2 px-4">{mahasiswa.jurusan}</td>
                <td className="py-2 px-4">{mahasiswa.angkatan}</td>
                <td className="py-2 px-4">{mahasiswa.email}</td>
                <td className="py-2 px-4">{mahasiswa.nohp}</td>
                <td className="py-2 px-4">{mahasiswa.status}</td>
                {edit ? (<td className="py-2 px-4 flex justify-around gap-5"></td>) : (
                  <td className="py-2 px-4 flex justify-around gap-5 mt-2">
                    <button type="button" onClick={() => handleEdit(mahasiswa.id)} className="cursor"><BiEdit size={25} color="green"></BiEdit></button>
                    <button type="button" onClick={() => handleDelete(mahasiswa.id)} className="cursor"><BiTrashAlt size={25} color="red"></BiTrashAlt></button>
                  </td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
      {mahasiswas.length === 0 ? (
          ""
        ) : (
          <button
            className="bg-rose-300 text-bold rounded-lg transition-all ease-in-out duration-300 hover:bg-rose-400 hover:text-white px-3 py-2 cursor"
            type="button"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        )}
      </div>
      
    </div>
  );
}
