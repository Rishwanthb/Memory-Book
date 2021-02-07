import React, { useEffect, useState } from "react";
import app from "../../../authservices/firebase";

export default function SectionBasics() {
  const [masterlist, setMasterlist] = React.useState([]);

  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const dataRef = app.database().ref("memories");
    dataRef.on("value", (snapshot) => {
      const masterdata = snapshot.val();
      setMasterlist(masterdata);
    });
  };

  return (
    <div>
      {masterlist.map((res, index) => (
        <p key={index}>
          {res.sort_key}-{res.name}-{res.year}
          <br />
        </p>
      ))}
    </div>
  );
}
