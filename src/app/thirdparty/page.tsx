import Thirdparty from "@/components/thirdparty";
import { ServerSideFunction } from "@/utils/server-utils";

const page = () => {
    const result=ServerSideFunction();
  return (
    <>
    <p>{result}</p>
    <Thirdparty/>
    </>
  )
}

export default page