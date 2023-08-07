const { ethers } = require("ethers");

const provider = new ethers.providers.WebSocketProvider("wss://chainstack.com");

async function mempool(){
    provider.on("pending", async(tx)=>{
        const txInfo = await provider.getTransaction(tx);
        try{
          console.log(ethers.utils.formatEther(txInfo.gasLimit))
            
        }
        catch{
            console.log("no data to show")
        }
        
    })
}

mempool()