import { ContractTransaction } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';

interface IMarketplace {
  list(nft_id: BigNumber, nft_programe_address: string): Promise<ContractTransaction>;
  nameprice(sopoid: BigNumber, price: BigNumber): Promise<ContractTransaction>;
  listandforsell(nft_id: BigNumber, nft_programe_address: string, price: BigNumber): Promise<ContractTransaction>;
  makeoffer(sopoid: BigNumber, offerprice: BigNumber): Promise<ContractTransaction>;
  acceptoffer(sopoid: BigNumber): Promise<ContractTransaction>;
  buy(sopoid: BigNumber, cost: BigNumber): Promise<ContractTransaction>;
  withdrawnft(sopoid: BigNumber): Promise<ContractTransaction>;
  changeprice(sopoid: BigNumber, newprice: BigNumber): Promise<ContractTransaction>;
  cancelsell(sopoid: BigNumber): Promise<ContractTransaction>;
}

export default IMarketplace;
