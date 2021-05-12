import { SdkWalletOptions, WalletModule } from '../../../interfaces';
declare function fortmatic(options: SdkWalletOptions & {
    networkId: number;
}): WalletModule;
export default fortmatic;
