import { useState,useEffect } from "react";

const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const contract={state};
    useEffect (()=>{
        const memosMessage=async ()=>{

            const memos=await contract.getMemos()
            setMemos(memos)
        }
        contract && memosMessage();
    },[contract]);


return <>
<p className="h3 mt-4 mb-3">Message</p>
<div className="table-responsive">
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>From</th>
        <th>Timestamp</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {memos.map((memo) => {
        return (
          <tr key={memo.timestamp}>
            <td>{memo.name}</td>
            <td>{memo.from}</td>
            <td>{String(memo.timestamp)}</td>
            <td>{memo.message}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
</>
};
export default Memos;
