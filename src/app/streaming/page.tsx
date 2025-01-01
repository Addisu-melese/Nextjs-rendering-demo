import Streamingtwo from "@/components/streaming1";
import StreamingThree from "@/components/streaming2";
import { Suspense } from "react";
const page = () => {
  return (
    <>
    <div>Streaming First</div>
    <Suspense fallback={<p>Loading streaming one</p>}>
    <Streamingtwo/>
    </Suspense>
    <Suspense fallback={<p>Loading streaming two</p>}>
    <StreamingThree/>
      
    </Suspense>
    </>
  )
}

export default page