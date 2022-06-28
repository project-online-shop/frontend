import React from "react";

const EditProfilCard = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Nama</label>
          <input className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={"text"} placeholder="Nama" />
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">UserName</label>
          <input
            className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type={"text"}
            placeholder="Buat Username Yang Unik"
          />
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Email</label>
          <input className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={"text"} placeholder="Tambahkan Email" />
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Nomor Handphone</label>
          <input className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={"text"} placeholder="Nomor Handphone" />
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Jenis Kelamin</label>
          <div className="relative">
            <select className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
              <option>Pilih</option>
              <option>Laki laki</option>
              <option>Perempuan</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Tanggal Lahir</label>
          <input className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={"text"} placeholder="Tanggal Lahir" />
          <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2">Alamat</label>
          <textarea className="appearance-none block w-full  text-gray-700 border border-indigo-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={"text"} placeholder="Alamat" />
        </div>
      </div>
    </form>
  );
};

export default EditProfilCard;
