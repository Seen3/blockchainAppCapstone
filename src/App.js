import './App.css';
import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import abi from "./contracts/mesg.json"
import Buy from './components/buy';
import Memos from './components/memos';


const CONTRACTADDRESS="";






function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  })

  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress=CONTRACTADDRESS;
      const contractAbi=abi.abi;
      try{
        const {ethereum}=window;
        if (ethereum){
          const account=await ethereum.request({method:'eth_requestAccounts',})
        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractAbi,signer);
        setState({provider,signer,contract});
      }catch(err){
        console.log(err);
      }
    }
    connectWallet();
  },[])
  console.log(state);
  return (
    <div className="App">
      <img src="https://media.licdn.com/dms/image/C4E1BAQGtkKZnm8Oymw/company-background_10000/0/1623727119769?e=1690948800&v=beta&t=ljSIReBFmrBJ3bYrOPOFgf50B4A20uJysYa26YhWh24" alt="blockchain-stock-image" class="img-fluid" style={{
        width:'100%',
      }}></img>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
