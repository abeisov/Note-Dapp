const contractAddress = "0x1DBEA3055DEf5692210a3D69C60655C065E1460A";
const contractABI = [{"inputs":[{"internalType":"string","name":"_note","type":"string"}],"name":"writeNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNote","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
let signer
let contract

const provider = new ethers.providers.Web3Provider(window.ethereum, 80001)//matic 

provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then( (accounts) => {
            signer = provider.getSigner(accounts[0]);
            contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            )
        }

        )

    }
)

async function getNote(){
    console.log(await contract.getNote());
}
async function writeNote(){
    const note = document.getElementById("inputNote").value;
    await contract.writeNote(note);

}