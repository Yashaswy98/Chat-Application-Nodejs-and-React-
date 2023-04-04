const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "072cf0f9-370a-4c3d-a3e6-c1f56de61de6"}}
    )
        return res.status(r.status).json(r.data) // response of the api call will take status of the api call and data within it
  }catch(e){
        return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);