import React from "react";
import axios from "axios";
export default function Racing() {
  const getRaces = () => {
    axios
      .get("http://api.trollskogen.nu/users", { crossdomain: true })
      .then(response => {
        console.log(response);
        return "success";
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <div>testelistest {getRaces()}</div>;
}
