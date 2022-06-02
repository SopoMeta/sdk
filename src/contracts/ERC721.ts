import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractTransaction } from '@ethersproject/contracts';

import IERC721 from './Interface/IERC721';
import * as ERC721Abi from '../abis/ERC721.json';
import { ERC721Address } from '../const';

export class ERC721 implements IERC721 {
  readonly providerSigner: Signer;
  protected contract: Contract;

  constructor(_providerSigner: Signer) {
    this.providerSigner = _providerSigner;
    this.contract = new Contract(ERC721Address, ERC721Abi, this.providerSigner);
  }

  async mintonlycreator(
    to: string,
    tokenURI: string
  ): Promise<ContractTransaction> {
    return await this.contract.mintonlycreator(to, tokenURI);
  }

  async mint(to: string, tokenURI: string): Promise<ContractTransaction> {
    return await this.contract.mint(to, tokenURI);
  }

  async burn(tokenid: BigNumber): Promise<ContractTransaction> {
    return await this.contract.burn(tokenid);
  }
}
