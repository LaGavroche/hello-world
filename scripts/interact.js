const hre = require("hardhat");
async function main() {
 // Remplacez par l'adresse de votre contrat déployé
 const contractAddress = "0xA16FD066Bc82E116AbE9eA09716E22fa7C7bC5B2";
 // On se connecte à notre contrat existant
 const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
 const hello = await HelloWorld.attach(contractAddress);
 // On lit le message actuel
 const currentMessage = await hello.message();
 console.log("Message actuel :", currentMessage);
 // On met à jour le message
 const tx = await hello.update("Nouveau message !");
 await tx.wait();
 console.log("Message mis à jour !");

 // On vérifie que le message a bien été mis à jour
 const newMessage = await hello.message();
 console.log("Nouveau message :", newMessage);
}
main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});

