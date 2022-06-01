import { Signer, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  P256SHA256Algorithm,
  P256SHA256AlgorithmInterface,
} from '../P256SHA256Algorithm'
declare type P256SHA256AlgorithmConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>
export declare class P256SHA256Algorithm__factory extends ContractFactory {
  constructor(...args: P256SHA256AlgorithmConstructorParams)
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<P256SHA256Algorithm>
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): TransactionRequest
  attach(address: string): P256SHA256Algorithm
  connect(signer: Signer): P256SHA256Algorithm__factory
  static readonly bytecode =
    '0x608060405234801561001057600080fd5b50612850806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de8f50a114610030575b600080fd5b61004a600480360381019061004591906124bb565b610060565b60405161005791906125f2565b60405180910390f35b6000610156600286866040516100779291906125d9565b602060405180830381855afa158015610094573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906100b79190612492565b61010485858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610162565b6101518a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506101f6565b61028a565b90509695505050505050565b61016a6123ef565b60408251146101ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a59061262d565b60405180910390fd5b60405180604001604052806101cd6000856108a190919063ffffffff16565b60001c81526020016101e96020856108a190919063ffffffff16565b60001c8152509050919050565b6101fe6123ef565b6044825114610242576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102399061260d565b60405180910390fd5b60405180604001604052806102616004856108a190919063ffffffff16565b60001c815260200161027d6024856108a190919063ffffffff16565b60001c8152509050919050565b600080836000600281106102c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151148061033657507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518360006002811061032e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015110155b8061037f5750600083600160028110610378577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151145b1561038d576000905061089a565b610413826000600281106103ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015183600160028110610409577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516108cc565b610420576000905061089a565b600080600080600061049088600160028110610465577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551610bf9565b90506105377f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f57fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518061052c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b848d60001c09610d03565b809450819650505061065b8760006002811061057c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151886001600281106105bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255180610615577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b848c600060028110610650577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015109610d03565b8093508195505050600061067186858786610e09565b90506000816002600381106106af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015114156106c9576000965050505050505061089a565b600061073382600260038110610708577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201517fffffffff00000001000000000000000000000000ffffffffffffffffffffffff610bf9565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061078a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806107df577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8283098360006003811061081c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201510990508960006002811061085e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201517fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518261088f9190612722565b149750505050505050505b9392505050565b600082516020836108b29190612669565b11156108bd57600080fd5b81602084010151905092915050565b600082600014806108fc57507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83145b806109075750816000145b8061093157507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82145b1561093f5760009050610bf3565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610996577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b838409905060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806109f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610a48577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b87880909905060007fffffffff00000001000000000000000000000000fffffffffffffffffffffffc14610b48577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610acb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610b20577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc8709820890505b60007f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b14610beb577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610bc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820890505b808214925050505b92915050565b600080831480610c0857508183145b80610c135750600082145b15610c215760009050610cfd565b81831115610c6357818381610c5f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0692505b600080600190506000849050600086905060005b60008214610cd957818381610cb5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04905083848202860383848402860380955081965082975083985050505050610c77565b6000851215610cf45784600003870395505050505050610cfd565b84955050505050505b92915050565b6000806000831415610d2057610d17610e3e565b91509150610e01565b6001831415610d3457848491509150610e01565b6002831415610d5057610d478585610e4c565b91509150610e01565b600085905060008590506000600190506000600190508895508794506000600288610d7b9190612722565b1415610d8957600094508495505b600187901c96505b6000871115610ded57610da5848484610e80565b8094508195508296505050506001600288610dc09190612722565b1415610de157610dd4848484898986611721565b8093508197508298505050505b600187901c9650610d91565b610df8868683611998565b95509550505050505b935093915050565b610e11612411565b600080610e2087878787611a86565b8092508193505050610e328282611ac0565b92505050949350505050565b600080600080915091509091565b6000806000610e5d85856001610e80565b809350819650829750505050610e74858583611998565b92509250509250929050565b6000806000806000806000610e958a8a611d1d565b15610eb157610ea2611d47565b96509650965050505050611718565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f06577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b888a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610f60577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6002840992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80610fbb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8a840991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611015577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b89830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061106f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6002830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806110ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8a8b0999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611124577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60038b0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061117f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b88890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806111d9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7fffffffff00000001000000000000000000000000fffffffffffffffffffffffc890997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611253577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b88850893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806112ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b84850990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611307577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8260020999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611362577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61138e91906126bf565b820890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806113e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b817fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61141391906126bf565b830899507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061146c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8a850999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806114c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611520577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b898a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061157a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8960020998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806115d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61160191906126bf565b8b0895507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061165a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81840996507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806116b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b83840994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061170e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8386099450505050505b93509350939050565b60008060008060008060006117368d8d611d1d565b1561174d578989899650965096505050505061198c565b6117578a8a611d1d565b1561176e578c8c8c9650965096505050505061198c565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806117c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b888d0993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061181d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8b8a0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611877577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b888e0991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806118d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8b8b099050808214156119175782841415611900576118f18d8d8d610e80565b9650965096505050505061198c565b611908611d47565b9650965096505050505061198c565b61197b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061196f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b898d0983838688611d5c565b809750819850829950505050505050505b96509650969350505050565b60008060006119c7847fffffffff00000001000000000000000000000000ffffffffffffffffffffffff610bf9565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611a1e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81870992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611a78577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b818609915050935093915050565b6000806000611a9b8787600188886001611721565b809350819850829950505050611ab2878783611998565b925092505094509492505050565b611ac8612411565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611b1d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600160000881600260038110611b5c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611bba577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81600260038110611bf4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151840981600060038110611c35577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020181815250507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611c93577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81600260038110611ccd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151830981600160038110611d0e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201818152505092915050565b60008083148015611d2e5750600082145b15611d3c5760019050611d41565b600090505b92915050565b60008060008060016000925092509250909192565b6000806000806000806000807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611dbd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff611de991906126bf565b8a0890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611e42577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff611e6e91906126bf565b8d0894507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611ec7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b85860993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611f21577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81820991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611f7b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8d830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80611fd5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8c8c089a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061202f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b848c099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80612089577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff6120b591906126bf565b830891507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061210e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82860997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80612168577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b85850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806121c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b848d099b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8061221c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b827fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61224891906126bf565b8d089b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806122a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8c820990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806122fb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b838a0998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80612355577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff61238191906126bf565b820896507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff806123da577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8d840995505050505050955095509592505050565b6040518060400160405280600290602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b60008151905061244281612803565b92915050565b60008083601f84011261245a57600080fd5b8235905067ffffffffffffffff81111561247357600080fd5b60208301915083600182028301111561248b57600080fd5b9250929050565b6000602082840312156124a457600080fd5b60006124b284828501612433565b91505092915050565b600080600080600080606087890312156124d457600080fd5b600087013567ffffffffffffffff8111156124ee57600080fd5b6124fa89828a01612448565b9650965050602087013567ffffffffffffffff81111561251957600080fd5b61252589828a01612448565b9450945050604087013567ffffffffffffffff81111561254457600080fd5b61255089828a01612448565b92509250509295509295509295565b612568816126f3565b82525050565b600061257a838561264d565b9350612587838584612713565b82840190509392505050565b60006125a0601783612658565b91506125ab826127b1565b602082019050919050565b60006125c3601d83612658565b91506125ce826127da565b602082019050919050565b60006125e682848661256e565b91508190509392505050565b6000602082019050612607600083018461255f565b92915050565b6000602082019050818103600083015261262681612593565b9050919050565b60006020820190508181036000830152612646816125b6565b9050919050565b600081905092915050565b600082825260208201905092915050565b600061267482612709565b915061267f83612709565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126b4576126b3612753565b5b828201905092915050565b60006126ca82612709565b91506126d583612709565b9250828210156126e8576126e7612753565b5b828203905092915050565b60008115159050919050565b6000819050919050565b6000819050919050565b82818337600083830152505050565b600061272d82612709565b915061273883612709565b92508261274857612747612782565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f496e76616c69642070323536206b6579206c656e677468000000000000000000600082015250565b7f496e76616c69642070323536207369676e6174757265206c656e677468000000600082015250565b61280c816126ff565b811461281757600080fd5b5056fea264697066735822122041b469a58c17efa4bbf76a90284953a55d4d07789c01f010594180f826f9babe64736f6c63430008040033'
  static readonly abi: {
    inputs: {
      internalType: string
      name: string
      type: string
    }[]
    name: string
    outputs: {
      internalType: string
      name: string
      type: string
    }[]
    stateMutability: string
    type: string
  }[]
  static createInterface(): P256SHA256AlgorithmInterface
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): P256SHA256Algorithm
}
export {}
