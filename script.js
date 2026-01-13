const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
const abi = [
    "function store(uint256 _favouriteNumber) public",
    "function retriever() public view returns (uint256)"
];

async function connect() {
    const provider = window.ethereum || (window.web3 && window.web3.currentProvider);
    
    if (provider) {
        try {
            console.log("MetaMask found, requesting accounts...");
            await provider.request({ method: "eth_requestAccounts" });
            document.getElementById("connection-status").innerText = "Status: Connected! ✅";
            document.getElementById("connectBtn").style.background = "#30f009";
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.error("No ethereum provider found");
        alert("MetaMask is hidden. Try clicking the Fox icon in your toolbar first!");
    }
}

async function storeValue() {
    const val = document.getElementById('numberInput').value;
    if (!val) return alert("Enter a number");

    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const tx = await contract.store(val);
        document.getElementById("connection-status").innerText = "Status: Mining...";
        await tx.wait();
        document.getElementById("connection-status").innerText = "Status: Stored! ✅";
    } catch (error) {
        console.error(error);
    }
}

async function getValue() {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const currentVal = await contract.retriever();
        document.getElementById('displayValue').innerText = currentVal.toString();
    } catch (error) {
        console.error(error);
    }
}

window.onload = () => {
    const cBtn = document.getElementById("connectBtn");
    const sBtn = document.getElementById("storeBtn");
    const gBtn = document.getElementById("getBtn");

    if(cBtn) cBtn.onclick = connect;
    if(sBtn) sBtn.onclick = storeValue;
    if(gBtn) gBtn.onclick = getValue;
    
    console.log("Scripts loaded and buttons mapped.");
};