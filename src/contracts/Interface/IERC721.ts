import { ContractTransaction } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';

interface IERC721 {
  mintonlycreator(to: string, tokenURI: string): Promise<ContractTransaction>;
  mint(to: string, tokenURI: string): Promise<ContractTransaction>;
  burn(tokenid: BigNumber): Promise<ContractTransaction>;
}

export default IERC721;
