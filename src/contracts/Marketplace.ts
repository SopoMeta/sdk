import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractTransaction } from '@ethersproject/contracts';

import * as MarketplaceABI from '../abis/Marketplace.json';
import { MarketplaceAddress } from '../const';
import IMarketplace from './Interface/IMarketplace';

export class MarketPlace implements IMarketplace {
  readonly providerSigner: Signer;
  protected contract: Contract;

  constructor(_providerSigner: Signer) {
    this.providerSigner = _providerSigner;
    this.contract = new Contract(
      MarketplaceAddress,
      MarketplaceABI,
      _providerSigner
    );
  }

  async list(
    nft_id: BigNumber,
    nft_programe_address: string
  ): Promise<ContractTransaction> {
    return await this.contract.list(nft_id, nft_programe_address);
  }

  async nameprice(
    sopoid: BigNumber,
    price: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.nameprice(sopoid, price);
  }

  async listandforsell(
    nft_id: BigNumber,
    nft_programe_address: string,
    price: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.listandforsell(
      nft_id,
      nft_programe_address,
      price
    );
  }

  async makeoffer(
    sopoid: BigNumber,
    offerprice: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.makeoffer(sopoid, { value: offerprice });
  }

  async acceptoffer(
    sopoid: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.acceptoffer(sopoid);
  }

  async buy(
    sopoid: BigNumber,
    cost: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.buy(sopoid, {value: cost});
  }

  async withdrawnft(
    sopoid: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.withdrawnft(sopoid);
  }

  async changeprice(
    sopoid: BigNumber,
    newprice: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.changeprice(sopoid, newprice);
  }

  async cancelsell(
    sopoid: BigNumber
  ): Promise<ContractTransaction> {
    return await this.contract.cancelsell(sopoid);
  }
}
