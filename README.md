# Bit-Pave A Decentralized public goods project

Our decentralized pothole reporting application offers a safe and efficient solution to one of the major concerns of road safety in many cities. Notably, none of the personally identifiable information of the users is recorded, and only their wallet address is required.The **wallet** for the users is **setup in an single click** signup process using their google account and ARCANA sdk. The data such as the reporter's wallet address, pothole ID, the geofence ID of the pothole (**a virtual fence is formed around the potholes on map for authorities to recognize them**), date, and even the IPFS hash of the pothole image are **all recorded on the smart contract**.

In addition, the solution provides citizens with an incentive to report potholes by rewarding them with SocialCoins token for their contributions to road safety. By reporting potholes, citizens can earn SocialCoins that can be used to purchase goods and services at government centres such as railways and metro stations.

Overall, our decentralized pothole reporting application is a user-friendly, efficient, and rewarding solution to the problem of potholes in many cities.

## Features 

1.) Smart Contract enabled
2.) Token reward system
3.) IPFS based data backup
4.) Geofencing of potholes
5.) One click wallet creation

## Methodology

The user can register on the application using their google account or email ID, once they register, a crypto wallet is automatically created for them through the ARCANA SDK after which the **application automatically connects the wallet to our testnet (Mantle testnet) where the smart contract and the SocialCoins token has been deployed.**

Once the initial setup of the application is done, now the application will display the main dashobaord which has an highlighted option to report potholes.

![This is an image](https://i.postimg.cc/5978zZh6/A5-FD74-E7-A182-44-C2-A266-520-E8-EB092-A1.png)



![{79009FFE-5CCB-49DB-A9B2-5394C3FB741B}](https://user-images.githubusercontent.com/111639304/220173220-a6f115aa-70d1-45de-add4-c3fabfd9ca3e.png)



Clicking on the '**Click to report pothole**' option enables the user's device camera. As soon as the camera is enabled, the inbuilt ML model starts to detect the pothole on road. Clicking on the capture button takes a picture of the pothole.

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220115173-e8e129ff-5c11-42b7-a0f6-88d0cb9cbc9a.png">
</p>


**And also the location of the pothole is displayed on the application**

![{BFC43FD8-9CE1-41C3-A62D-967871051B76}-min](https://user-images.githubusercontent.com/111639304/220113088-5067012d-16f7-4cf7-9883-ddc697b39f3b.png)

Now one of the unique features of the application comes in, once the estimated location of the pothole is known the application creates a circular **geofence** around the pothole and the unique geofenceid of the pothole is noted. (for the authoroties to recognize it)

**The geofence around the pothole will be deleted by the smart contract once it is fixed by the authorities and the smart contract is notified about it.** 

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220118446-aef80105-cf57-4cf7-97e0-2ea015ae223b.png" width="750">
</p>


The image of the pothole is sent to the **decentralized IPFS storage system** and the **Content ID hash** of the image is noted and **mapped to the reporter's wallet address in the smart contract.**

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220121956-c88d448b-3ecd-47a9-be48-8b94e06f30bd.jpg" width="650">
</p>



Now all of this data ie. Pothole-id ==> Geofence-id ==> IPFS hash of the pothole image ==> date of reporting ==> is **sent to the smart contract where its mapped to the reporter's wallet address.**

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220146792-56aa732a-ebb3-4a98-9a52-c081fb9acde1.png" width="650">
</p>

Once a pothole is successfully reported, the reporter's wallet will be credited with 2 SocialCoins from the token contract on the testnet and will be notified about it. The user can then use these SocialCoins to purchase goods and services at government centers such as railways and metro stations. The **users wallet balance** will be displayed on the **rewards section** along with the **pictures of the pothole stored in IPFS** that was reported by the user.

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220107202-f0390761-be05-4819-ab83-18d252fa42d9.jpg" width="850">
</p>

There's also a leaderboard section that displays the top ten reporters along with the count of their reports (retrieved from the score data of smart contract).

<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220150353-386f8bf6-77ee-4f67-8075-ea82731e5102.png" width="850">
</p>


## Special cases

What if someone reported the same pothole twice?🤔 Will they too be rewarded?🤔

**Here comes another use of our geofence feature.**

When a user reports the same pothole that was reported by another user the smart contract wont reward that user until and unless the pothole was last reported 10 days ago.

**Lets see how the logic works..**

If a user reports the same pothole that was reported by someone else he would be instructing the application to create a geofence around the pothole, but there would already be a geofence around the pothole which will be detected by the smart contract and the application, now the smart contract recognizes that the pothole the user is trying to report is already reported, now the smart contract would check if the pothole was last reported 10 days ago or not, if it was older that 10 days the user would get rewarded by SocialCoins, if not the user would be notified that the pothole has already been reported.


<p align="center">
  <img src="https://user-images.githubusercontent.com/111639304/220170626-8a0fee60-7537-4983-9354-973a34a6210f.png" width="750">
</p>


