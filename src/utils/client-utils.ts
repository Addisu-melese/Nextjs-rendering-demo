import "client-only"
//this is on;y work on client side not work on server side
export const ClientSideFunction=()=>{
    console.log(`
        use window objects,
        use local storae 
        `)
        return "Client result";
}