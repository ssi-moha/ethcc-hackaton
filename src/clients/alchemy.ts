import {  Nft } from "@alch/alchemy-web3";
import axios from "axios";

export type NFT = Nft;

const web3 = axios.create({
  baseURL:
    "https://polygon-mainnet.g.alchemy.com/v2/x97VSdTdeVeFEUpCDRH1ENsSyi5PYPIP",
});

export async function getEveryNftOfWallet(
  walletAddress: string
): Promise<NFT[]> {
  const url = `getNFTs/?owner=${walletAddress}`;

  try {
    const result = await web3.get(url);
    return result.data.ownedNfts;
  } catch (e) {
    console.error(e);
  }

  return [];
}
