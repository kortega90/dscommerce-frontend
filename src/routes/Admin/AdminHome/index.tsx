import "./styles.css";
import { useEffect, useState } from "react";
import * as userService from "../../../services/user-Service";
import { userDTO } from "../../../model/user";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdminHome() {
  const [user, setUser] = useState<userDTO>();

  useEffect(() => {
    userService.findMe()
      .then(response => {
        setUser(response.data);
      });
  }, []);
  return (

    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">
          Bem-vindo à área administrativa {user?.name}
        </h2>
      </section>
    </main>
    
  );
}
