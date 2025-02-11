"use client";
import { useEffect, useState } from "react";
import State from "./State";
import axios from "axios";

export default function EquipmentRow({
  id,
  idTeamMember,
  date,
  state,
  price,
  className = "",
  handleClick,
}) {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/teamMembers/${idTeamMember}`)
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <tr className={` text-left ${className}`}>
      <td
        onClick={() => handleClick(id)}
        className="pl-5 py-3 text-blue cursor-pointer"
      >
        #{id}
      </td>
      <td className="pl-3 py-3">
        {user.firstName} {user.lastName}
      </td>
      <td className="pl-3 py-3">{date}</td>
      <td className="pl-3 py-3 ">{state}</td>

      <td className="pl-3 py-3">USD {price}</td>
    </tr>
  );
}
