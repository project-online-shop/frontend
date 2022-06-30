import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../Context/AuthContext";
import sepatu from "../images/sepatu.jpg";

const Profile = () => {
  let navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    axios
      .get(`https://infinitysport.site/users/details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => {
        setProfile({
          ...profile,
          ...data.data,
        });

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className=" w-full text-center mb-5">
        <h1 className="text-6xl">PROFIL</h1>
      </div>
      <div className="w-1/2 mx-auto">
        <img
          src={sepatu}
          alt="sepatu"
          className="mx-auto rounded-3xl overflow-hidden"
        />
        <div className="text-center p-3">
          <div className="text-xl mb-3">Nama : {profile.name}</div>
          <div className="text-xl mb-3">Email : {profile.email}</div>
        </div>
      </div>
      <div className="flex justify-around">
        <button className="bg-white border border-black text-black p-2 rounded-lg">
          Edit Profil
        </button>
        <button className="bg-black text-white p-2 rounded-lg">
          Add Product
        </button>
      </div>
    </Layout>
  );
};

export default Profile;
