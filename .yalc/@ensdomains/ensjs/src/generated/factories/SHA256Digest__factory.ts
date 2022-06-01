/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { SHA256Digest, SHA256DigestInterface } from '../SHA256Digest'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'hash',
        type: 'bytes',
      },
    ],
    name: 'verify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610476806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f7e83aee14610030575b600080fd5b61004a60048036038101906100459190610210565b610060565b60405161005791906102f5565b60405180910390f35b6000602083839050146100a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009f90610310565b60405180910390fd5b610100600084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061015d90919063ffffffff16565b600286866040516101129291906102dc565b602060405180830381855afa15801561012f573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061015291906101e7565b149050949350505050565b6000825160208361016e919061034c565b111561017957600080fd5b81602084010151905092915050565b60008151905061019781610429565b92915050565b60008083601f8401126101af57600080fd5b8235905067ffffffffffffffff8111156101c857600080fd5b6020830191508360018202830111156101e057600080fd5b9250929050565b6000602082840312156101f957600080fd5b600061020784828501610188565b91505092915050565b6000806000806040858703121561022657600080fd5b600085013567ffffffffffffffff81111561024057600080fd5b61024c8782880161019d565b9450945050602085013567ffffffffffffffff81111561026b57600080fd5b6102778782880161019d565b925092505092959194509250565b61028e816103a2565b82525050565b60006102a08385610330565b93506102ad8385846103c2565b82840190509392505050565b60006102c6601a8361033b565b91506102d182610400565b602082019050919050565b60006102e9828486610294565b91508190509392505050565b600060208201905061030a6000830184610285565b92915050565b60006020820190508181036000830152610329816102b9565b9050919050565b600081905092915050565b600082825260208201905092915050565b6000610357826103b8565b9150610362836103b8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610397576103966103d1565b5b828201905092915050565b60008115159050919050565b6000819050919050565b6000819050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f496e76616c6964207368613235362068617368206c656e677468000000000000600082015250565b610432816103ae565b811461043d57600080fd5b5056fea26469706673582212205a6c0d3ca7e9316a86f951cf99715b47098325f52075833ecbde2d473b7b090464736f6c63430008040033'

type SHA256DigestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: SHA256DigestConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class SHA256Digest__factory extends ContractFactory {
  constructor(...args: SHA256DigestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<SHA256Digest> {
    return super.deploy(overrides || {}) as Promise<SHA256Digest>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): SHA256Digest {
    return super.attach(address) as SHA256Digest
  }
  override connect(signer: Signer): SHA256Digest__factory {
    return super.connect(signer) as SHA256Digest__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SHA256DigestInterface {
    return new utils.Interface(_abi) as SHA256DigestInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): SHA256Digest {
    return new Contract(address, _abi, signerOrProvider) as SHA256Digest
  }
}
