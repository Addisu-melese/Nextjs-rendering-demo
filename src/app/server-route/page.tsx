import { ServerSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
    console.log("Server sider rendering");
    const result=ServerSideFunction();
  return (
    <>
    <div>ServerRoutePage</div>
    <p>{result}</p>
    </>
  )
}

export default ServerRoutePage