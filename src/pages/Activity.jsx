import React, { useEffect } from "react";
import axios from "axios";



export default function Activity() {

  const data={
    "email": "yashbarman3010@gmail.com",
    "key": "4b34c9ae-3486-4ac6-9212-42860a4c231a"
  };


  const resultData={
    "base64": btoa('Area 51 is the common name of a highly classified United States Air Force facility within the Nevada Test and Training Range. A remote detachment administered by Edwards Air Force Base, the facility is officially called Homey Airport or Groom Lake'),
    "filename": "file.txt",
    "properties": {
      "webhooks": {
        "status": "https://ennqqv1eclbk.x.pipedream.net/{STATUS}/my-first-scan"
      }
    }
  }

  const headers = {
    "Content-Type": "application/json",
};



  const getMyResult = async () => {
    try {
      const res = await axios.post("https://id.copyleaks.com/v3/account/login/api",data,{
        headers: headers
    });
      console.log("Bearer "+ res.data.access_token);
      const resul = await axios.put("https://api.copyleaks.com/v3/scans/submit/file/my-first-scan",resultData,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+res.data.access_token
        }
    });
    console.log(resul.data);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    
    getMyResult();
    
  }, )
  

  return (
    <div className="bg-gray-200 max-w-200 p-4 m-4">
      {/* <div>
        <h1>{myerror.message}</h1>
        {mydata.map((data) => (
          <div className="p-2 bg-gray-600 text-white " key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
