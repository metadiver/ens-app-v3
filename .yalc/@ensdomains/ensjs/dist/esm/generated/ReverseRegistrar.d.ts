import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'
export interface ReverseRegistrarInterface extends utils.Interface {
  functions: {
    'claim(address)': FunctionFragment
    'claimForAddr(address,address,address)': FunctionFragment
    'claimWithResolver(address,address)': FunctionFragment
    'controllers(address)': FunctionFragment
    'defaultResolver()': FunctionFragment
    'ens()': FunctionFragment
    'node(address)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setController(address,bool)': FunctionFragment
    'setDefaultResolver(address)': FunctionFragment
    'setName(string)': FunctionFragment
    'setNameForAddr(address,address,address,string)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'claim'
      | 'claimForAddr'
      | 'claimWithResolver'
      | 'controllers'
      | 'defaultResolver'
      | 'ens'
      | 'node'
      | 'owner'
      | 'renounceOwnership'
      | 'setController'
      | 'setDefaultResolver'
      | 'setName'
      | 'setNameForAddr'
      | 'transferOwnership',
  ): FunctionFragment
  encodeFunctionData(functionFragment: 'claim', values: [string]): string
  encodeFunctionData(
    functionFragment: 'claimForAddr',
    values: [string, string, string],
  ): string
  encodeFunctionData(
    functionFragment: 'claimWithResolver',
    values: [string, string],
  ): string
  encodeFunctionData(functionFragment: 'controllers', values: [string]): string
  encodeFunctionData(
    functionFragment: 'defaultResolver',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'ens', values?: undefined): string
  encodeFunctionData(functionFragment: 'node', values: [string]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'setController',
    values: [string, boolean],
  ): string
  encodeFunctionData(
    functionFragment: 'setDefaultResolver',
    values: [string],
  ): string
  encodeFunctionData(functionFragment: 'setName', values: [string]): string
  encodeFunctionData(
    functionFragment: 'setNameForAddr',
    values: [string, string, string, string],
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'claimForAddr',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'claimWithResolver',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'controllers', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'defaultResolver',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'ens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'node', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setController',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setDefaultResolver',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'setName', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setNameForAddr',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result
  events: {
    'ControllerChanged(address,bool)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'ReverseClaimed(address,bytes32)': EventFragment
  }
  getEvent(nameOrSignatureOrTopic: 'ControllerChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ReverseClaimed'): EventFragment
}
export interface ControllerChangedEventObject {
  controller: string
  enabled: boolean
}
export declare type ControllerChangedEvent = TypedEvent<
  [string, boolean],
  ControllerChangedEventObject
>
export declare type ControllerChangedEventFilter =
  TypedEventFilter<ControllerChangedEvent>
export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export declare type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>
export declare type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>
export interface ReverseClaimedEventObject {
  addr: string
  node: string
}
export declare type ReverseClaimedEvent = TypedEvent<
  [string, string],
  ReverseClaimedEventObject
>
export declare type ReverseClaimedEventFilter =
  TypedEventFilter<ReverseClaimedEvent>
export interface ReverseRegistrar extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: ReverseRegistrarInterface
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>
  functions: {
    claim(
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    claimForAddr(
      addr: string,
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    claimWithResolver(
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    controllers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>
    defaultResolver(overrides?: CallOverrides): Promise<[string]>
    ens(overrides?: CallOverrides): Promise<[string]>
    node(addr: string, overrides?: CallOverrides): Promise<[string]>
    owner(overrides?: CallOverrides): Promise<[string]>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setController(
      controller: string,
      enabled: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setDefaultResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setName(
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setNameForAddr(
      addr: string,
      owner: string,
      resolver: string,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
  }
  claim(
    owner: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  claimForAddr(
    addr: string,
    owner: string,
    resolver: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  claimWithResolver(
    owner: string,
    resolver: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>
  defaultResolver(overrides?: CallOverrides): Promise<string>
  ens(overrides?: CallOverrides): Promise<string>
  node(addr: string, overrides?: CallOverrides): Promise<string>
  owner(overrides?: CallOverrides): Promise<string>
  renounceOwnership(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setController(
    controller: string,
    enabled: boolean,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setDefaultResolver(
    resolver: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setName(
    name: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setNameForAddr(
    addr: string,
    owner: string,
    resolver: string,
    name: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  callStatic: {
    claim(owner: string, overrides?: CallOverrides): Promise<string>
    claimForAddr(
      addr: string,
      owner: string,
      resolver: string,
      overrides?: CallOverrides,
    ): Promise<string>
    claimWithResolver(
      owner: string,
      resolver: string,
      overrides?: CallOverrides,
    ): Promise<string>
    controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>
    defaultResolver(overrides?: CallOverrides): Promise<string>
    ens(overrides?: CallOverrides): Promise<string>
    node(addr: string, overrides?: CallOverrides): Promise<string>
    owner(overrides?: CallOverrides): Promise<string>
    renounceOwnership(overrides?: CallOverrides): Promise<void>
    setController(
      controller: string,
      enabled: boolean,
      overrides?: CallOverrides,
    ): Promise<void>
    setDefaultResolver(
      resolver: string,
      overrides?: CallOverrides,
    ): Promise<void>
    setName(name: string, overrides?: CallOverrides): Promise<string>
    setNameForAddr(
      addr: string,
      owner: string,
      resolver: string,
      name: string,
      overrides?: CallOverrides,
    ): Promise<string>
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>
  }
  filters: {
    'ControllerChanged(address,bool)'(
      controller?: string | null,
      enabled?: null,
    ): ControllerChangedEventFilter
    ControllerChanged(
      controller?: string | null,
      enabled?: null,
    ): ControllerChangedEventFilter
    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter
    'ReverseClaimed(address,bytes32)'(
      addr?: string | null,
      node?: BytesLike | null,
    ): ReverseClaimedEventFilter
    ReverseClaimed(
      addr?: string | null,
      node?: BytesLike | null,
    ): ReverseClaimedEventFilter
  }
  estimateGas: {
    claim(
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    claimForAddr(
      addr: string,
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    claimWithResolver(
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    controllers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>
    defaultResolver(overrides?: CallOverrides): Promise<BigNumber>
    ens(overrides?: CallOverrides): Promise<BigNumber>
    node(addr: string, overrides?: CallOverrides): Promise<BigNumber>
    owner(overrides?: CallOverrides): Promise<BigNumber>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setController(
      controller: string,
      enabled: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setDefaultResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setName(
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setNameForAddr(
      addr: string,
      owner: string,
      resolver: string,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
  }
  populateTransaction: {
    claim(
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    claimForAddr(
      addr: string,
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    claimWithResolver(
      owner: string,
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    controllers(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    defaultResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>
    ens(overrides?: CallOverrides): Promise<PopulatedTransaction>
    node(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setController(
      controller: string,
      enabled: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setDefaultResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setName(
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setNameForAddr(
      addr: string,
      owner: string,
      resolver: string,
      name: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
  }
}
