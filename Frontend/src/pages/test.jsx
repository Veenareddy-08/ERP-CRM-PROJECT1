import {useEffect} from "react";
import API from "../api/axios";

function Test(){

useEffect(()=>{

API.get("/")
.then(res=>{
    console.log(res.data);
})
.catch(err=>{
    console.log(err);
});

},[]);


return(
<h2>Testing Backend Connection</h2>
);

}

export default Test;