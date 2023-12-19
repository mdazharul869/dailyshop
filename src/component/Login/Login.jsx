import { useParams } from "react-router-dom";
import Header from "../layout/Header/Header";

export default function Login()  {

    const {name, id} = useParams()
    console.log(name, id)
  return (
    <div>
      <Header />  
    </div>
  )
}


