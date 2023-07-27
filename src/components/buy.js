import { ethers } from "ethers";
const Buy=({state})=>{

    const buyMesg=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;

        const amount={value:ethers.utils.parseEther("0.001")};
        const transaction=await contract.buyMesg(name,message,amount);

        await transaction.wait();
        console.log("Transaction Done");
    }

    return (
        <div className="mb-3">
        <form onSubmit={buyMesg} style={{
            margin:'1em 17em',
        }}>
            <label className="form-label lead-font-weight lead-font-size" style={{
                fontFamily:'monospace',
            }}>Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="form-control"></input>
            <label className="form-label lead-font-weight lead-font-size"
            style={{
                fontFamily:'monospace',
            }}>Message</label>
            <input type="text" id="message" placeholder="Enter your message" className="form-control"></input>
            <button type="submit" className="btn btn-primary" style={{
                margin:'1em'
            }}>Pay</button>
        </form>
        </div>
    )
}
export default Buy;
