const hre = require("hardhat");

async function main() {
  // Remplacez par l'adresse de votre contrat déployé
  const contractAddress = "0x77bd66bcE03C92266C49C6C79A6ED6e024B49FDb";
  // On se connecte à notre contrat existant
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.attach(contractAddress);
  
  // Mon prénom comme donnée
  const prenom = "Rayan";
  
  // On lit le message actuel
  const currentMessage = await hello.message();
  console.log("Message actuel :", currentMessage);
  
  // On met à jour le message avec mon prénom
  const tx = await hello.update(`Nouveau message de ${prenom} !`);
  await tx.wait();
  console.log("Message mis à jour avec mon prénom !");
 
  // On vérifie que le message a bien été mis à jour
  const newMessage = await hello.message();
  console.log("Nouveau message :", newMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});