//import { ClientSideFunction } from "@/utils/client-utils";
import { ServerSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
    console.log("Server sider rendering");
    const result=ServerSideFunction();
    // const client=ClientSideFunction();
  return (
    <>
    <div>ServerRoutePage</div>
    <p>{result}</p>
    {/* <p>{client}</p> */}
    </>
  )
}

export default ServerRoutePage