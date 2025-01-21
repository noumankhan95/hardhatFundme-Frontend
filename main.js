import { ethers, BrowserProvider } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
const connectBTN = document.getElementById("connectButton")
const fundBTN = document.getElementById("fundButton")
connectBTN.onclick = connect
fundBTN.onclick = fund
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        connectBTN.innerHTML = "Connected";
        connectBTN.disabled = true;
    } else {
        console.log("NO Metamask");
    }
}

async function fund(ethAmount) {
    try {
        const provider = new BrowserProvider(window.ethereum)
        console.log("ethers", provider)
        const signer = await provider.getSigner()
        console.log(signer, "Signer")
    } catch (e) {
        console.log(e)
    }
}