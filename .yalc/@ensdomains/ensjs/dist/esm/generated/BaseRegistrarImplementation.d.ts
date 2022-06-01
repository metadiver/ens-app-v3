import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
export interface BaseRegistrarImplementationInterface extends utils.Interface {
  functions: {
    'GRACE_PERIOD()': FunctionFragment
    'addController(address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'available(uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'baseNode()': FunctionFragment
    'controllers(address)': FunctionFragment
    'ens()': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'isOwner()': FunctionFragment
    'nameExpires(uint256)': FunctionFragment
    'owner()': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'reclaim(uint256,address)': FunctionFragment
    'register(uint256,address,uint256)': FunctionFragment
    'registerOnly(uint256,address,uint256)': FunctionFragment
    'removeController(address)': FunctionFragment
    'renew(uint256,uint256)': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'setResolver(address)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'GRACE_PERIOD'
      | 'addController'
      | 'approve'
      | 'available'
      | 'balanceOf'
      | 'baseNode'
      | 'controllers'
      | 'ens'
      | 'getApproved'
      | 'isApprovedForAll'
      | 'isOwner'
      | 'nameExpires'
      | 'owner'
      | 'ownerOf'
      | 'reclaim'
      | 'register'
      | 'registerOnly'
      | 'removeController'
      | 'renew'
      | 'renounceOwnership'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'setResolver'
      | 'supportsInterface'
      | 'transferFrom'
      | 'transferOwnership',
  ): FunctionFragment
  encodeFunctionData(
    functionFragment: 'GRACE_PERIOD',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'addController',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'available',
    values: [BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'baseNode', values?: undefined): string
  encodeFunctionData(functionFragment: 'controllers', values: [string]): string
  encodeFunctionData(functionFragment: 'ens', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string
  encodeFunctionData(functionFragment: 'isOwner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'nameExpires',
    values: [BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'reclaim',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'register',
    values: [BigNumberish, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'registerOnly',
    values: [BigNumberish, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'removeController',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'renew',
    values: [BigNumberish, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [string, string, BigNumberish, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string
  encodeFunctionData(functionFragment: 'setResolver', values: [string]): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string
  decodeFunctionResult(
    functionFragment: 'GRACE_PERIOD',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'addController',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'baseNode', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'controllers', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nameExpires', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'reclaim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'registerOnly',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'removeController',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'renew', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'setResolver', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result
  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'ControllerAdded(address)': EventFragment
    'ControllerRemoved(address)': EventFragment
    'NameMigrated(uint256,address,uint256)': EventFragment
    'NameRegistered(uint256,address,uint256)': EventFragment
    'NameRenewed(uint256,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ControllerAdded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ControllerRemoved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NameMigrated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NameRegistered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NameRenewed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}
export interface ApprovalEventObject {
  owner: string
  approved: string
  tokenId: BigNumber
}
export declare type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>
export interface ApprovalForAllEventObject {
  owner: string
  operator: string
  approved: boolean
}
export declare type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>
export declare type ApprovalForAllEventFilter =
  TypedEventFilter<ApprovalForAllEvent>
export interface ControllerAddedEventObject {
  controller: string
}
export declare type ControllerAddedEvent = TypedEvent<
  [string],
  ControllerAddedEventObject
>
export declare type ControllerAddedEventFilter =
  TypedEventFilter<ControllerAddedEvent>
export interface ControllerRemovedEventObject {
  controller: string
}
export declare type ControllerRemovedEvent = TypedEvent<
  [string],
  ControllerRemovedEventObject
>
export declare type ControllerRemovedEventFilter =
  TypedEventFilter<ControllerRemovedEvent>
export interface NameMigratedEventObject {
  id: BigNumber
  owner: string
  expires: BigNumber
}
export declare type NameMigratedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  NameMigratedEventObject
>
export declare type NameMigratedEventFilter =
  TypedEventFilter<NameMigratedEvent>
export interface NameRegisteredEventObject {
  id: BigNumber
  owner: string
  expires: BigNumber
}
export declare type NameRegisteredEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  NameRegisteredEventObject
>
export declare type NameRegisteredEventFilter =
  TypedEventFilter<NameRegisteredEvent>
export interface NameRenewedEventObject {
  id: BigNumber
  expires: BigNumber
}
export declare type NameRenewedEvent = TypedEvent<
  [BigNumber, BigNumber],
  NameRenewedEventObject
>
export declare type NameRenewedEventFilter = TypedEventFilter<NameRenewedEvent>
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
export interface TransferEventObject {
  from: string
  to: string
  tokenId: BigNumber
}
export declare type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>
export interface BaseRegistrarImplementation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: BaseRegistrarImplementationInterface
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
    GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>
    addController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    available(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>
    baseNode(overrides?: CallOverrides): Promise<[string]>
    controllers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>
    ens(overrides?: CallOverrides): Promise<[string]>
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>
    isOwner(overrides?: CallOverrides): Promise<[boolean]>
    nameExpires(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>
    owner(overrides?: CallOverrides): Promise<[string]>
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>
    reclaim(
      id: BigNumberish,
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    register(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    registerOnly(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    removeController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    renew(
      id: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setApprovalForAll(
      to: string,
      approved: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    setResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<ContractTransaction>
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
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
  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>
  addController(
    controller: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  available(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>
  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>
  baseNode(overrides?: CallOverrides): Promise<string>
  controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>
  ens(overrides?: CallOverrides): Promise<string>
  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>
  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>
  isOwner(overrides?: CallOverrides): Promise<boolean>
  nameExpires(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  owner(overrides?: CallOverrides): Promise<string>
  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>
  reclaim(
    id: BigNumberish,
    owner: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  register(
    id: BigNumberish,
    owner: string,
    duration: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  registerOnly(
    id: BigNumberish,
    owner: string,
    duration: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  removeController(
    controller: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  renew(
    id: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  renounceOwnership(
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setApprovalForAll(
    to: string,
    approved: boolean,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  setResolver(
    resolver: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    },
  ): Promise<ContractTransaction>
  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
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
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>
    addController(controller: string, overrides?: CallOverrides): Promise<void>
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>
    available(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>
    baseNode(overrides?: CallOverrides): Promise<string>
    controllers(arg0: string, overrides?: CallOverrides): Promise<boolean>
    ens(overrides?: CallOverrides): Promise<string>
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>
    isOwner(overrides?: CallOverrides): Promise<boolean>
    nameExpires(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
    owner(overrides?: CallOverrides): Promise<string>
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>
    reclaim(
      id: BigNumberish,
      owner: string,
      overrides?: CallOverrides,
    ): Promise<void>
    register(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    registerOnly(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    removeController(
      controller: string,
      overrides?: CallOverrides,
    ): Promise<void>
    renew(
      id: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    renounceOwnership(overrides?: CallOverrides): Promise<void>
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>
    setApprovalForAll(
      to: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>
    setResolver(resolver: string, overrides?: CallOverrides): Promise<void>
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>
  }
  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter
    'ApprovalForAll(address,address,bool)'(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter
    'ControllerAdded(address)'(
      controller?: string | null,
    ): ControllerAddedEventFilter
    ControllerAdded(controller?: string | null): ControllerAddedEventFilter
    'ControllerRemoved(address)'(
      controller?: string | null,
    ): ControllerRemovedEventFilter
    ControllerRemoved(controller?: string | null): ControllerRemovedEventFilter
    'NameMigrated(uint256,address,uint256)'(
      id?: BigNumberish | null,
      owner?: string | null,
      expires?: null,
    ): NameMigratedEventFilter
    NameMigrated(
      id?: BigNumberish | null,
      owner?: string | null,
      expires?: null,
    ): NameMigratedEventFilter
    'NameRegistered(uint256,address,uint256)'(
      id?: BigNumberish | null,
      owner?: string | null,
      expires?: null,
    ): NameRegisteredEventFilter
    NameRegistered(
      id?: BigNumberish | null,
      owner?: string | null,
      expires?: null,
    ): NameRegisteredEventFilter
    'NameRenewed(uint256,uint256)'(
      id?: BigNumberish | null,
      expires?: null,
    ): NameRenewedEventFilter
    NameRenewed(
      id?: BigNumberish | null,
      expires?: null,
    ): NameRenewedEventFilter
    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter
    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TransferEventFilter
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TransferEventFilter
  }
  estimateGas: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>
    addController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    available(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>
    baseNode(overrides?: CallOverrides): Promise<BigNumber>
    controllers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>
    ens(overrides?: CallOverrides): Promise<BigNumber>
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    isOwner(overrides?: CallOverrides): Promise<BigNumber>
    nameExpires(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
    owner(overrides?: CallOverrides): Promise<BigNumber>
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    reclaim(
      id: BigNumberish,
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    register(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    registerOnly(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    removeController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    renew(
      id: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setApprovalForAll(
      to: string,
      approved: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    setResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<BigNumber>
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
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
    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>
    addController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    available(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    balanceOf(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    baseNode(overrides?: CallOverrides): Promise<PopulatedTransaction>
    controllers(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    ens(overrides?: CallOverrides): Promise<PopulatedTransaction>
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>
    nameExpires(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    reclaim(
      id: BigNumberish,
      owner: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    register(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    registerOnly(
      id: BigNumberish,
      owner: string,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    removeController(
      controller: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    renew(
      id: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    renounceOwnership(
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setApprovalForAll(
      to: string,
      approved: boolean,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    setResolver(
      resolver: string,
      overrides?: Overrides & {
        from?: string | Promise<string>
      },
    ): Promise<PopulatedTransaction>
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
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
