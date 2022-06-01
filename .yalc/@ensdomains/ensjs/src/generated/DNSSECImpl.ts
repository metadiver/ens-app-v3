/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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

export declare namespace DNSSEC {
  export type RRSetWithSignatureStruct = { rrset: BytesLike; sig: BytesLike }

  export type RRSetWithSignatureStructOutput = [string, string] & {
    rrset: string
    sig: string
  }
}

export interface DNSSECImplInterface extends utils.Interface {
  functions: {
    'algorithms(uint8)': FunctionFragment
    'anchors()': FunctionFragment
    'deleteRRSet(uint16,bytes,(bytes,bytes),bytes)': FunctionFragment
    'deleteRRSetNSEC3(uint16,bytes,(bytes,bytes),(bytes,bytes),bytes)': FunctionFragment
    'digests(uint8)': FunctionFragment
    'nsec3Digests(uint8)': FunctionFragment
    'owner()': FunctionFragment
    'rrdata(uint16,bytes)': FunctionFragment
    'setAlgorithm(uint8,address)': FunctionFragment
    'setDigest(uint8,address)': FunctionFragment
    'setNSEC3Digest(uint8,address)': FunctionFragment
    'setOwner(address)': FunctionFragment
    'submitRRSet((bytes,bytes),bytes)': FunctionFragment
    'submitRRSets((bytes,bytes)[],bytes)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'algorithms'
      | 'anchors'
      | 'deleteRRSet'
      | 'deleteRRSetNSEC3'
      | 'digests'
      | 'nsec3Digests'
      | 'owner'
      | 'rrdata'
      | 'setAlgorithm'
      | 'setDigest'
      | 'setNSEC3Digest'
      | 'setOwner'
      | 'submitRRSet'
      | 'submitRRSets',
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'algorithms',
    values: [BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'anchors', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'deleteRRSet',
    values: [
      BigNumberish,
      BytesLike,
      DNSSEC.RRSetWithSignatureStruct,
      BytesLike,
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'deleteRRSetNSEC3',
    values: [
      BigNumberish,
      BytesLike,
      DNSSEC.RRSetWithSignatureStruct,
      DNSSEC.RRSetWithSignatureStruct,
      BytesLike,
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'digests',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'nsec3Digests',
    values: [BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'rrdata',
    values: [BigNumberish, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'setAlgorithm',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'setDigest',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'setNSEC3Digest',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(functionFragment: 'setOwner', values: [string]): string
  encodeFunctionData(
    functionFragment: 'submitRRSet',
    values: [DNSSEC.RRSetWithSignatureStruct, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'submitRRSets',
    values: [DNSSEC.RRSetWithSignatureStruct[], BytesLike],
  ): string

  decodeFunctionResult(functionFragment: 'algorithms', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'anchors', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deleteRRSet', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'deleteRRSetNSEC3',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'digests', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'nsec3Digests',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'rrdata', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setAlgorithm',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'setDigest', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setNSEC3Digest',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'submitRRSet', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'submitRRSets',
    data: BytesLike,
  ): Result

  events: {
    'AlgorithmUpdated(uint8,address)': EventFragment
    'DigestUpdated(uint8,address)': EventFragment
    'Marker()': EventFragment
    'NSEC3DigestUpdated(uint8,address)': EventFragment
    'RRSetUpdated(bytes,bytes)': EventFragment
    'Test(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'AlgorithmUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DigestUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Marker'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NSEC3DigestUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RRSetUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Test'): EventFragment
}

export interface AlgorithmUpdatedEventObject {
  id: number
  addr: string
}
export type AlgorithmUpdatedEvent = TypedEvent<
  [number, string],
  AlgorithmUpdatedEventObject
>

export type AlgorithmUpdatedEventFilter =
  TypedEventFilter<AlgorithmUpdatedEvent>

export interface DigestUpdatedEventObject {
  id: number
  addr: string
}
export type DigestUpdatedEvent = TypedEvent<
  [number, string],
  DigestUpdatedEventObject
>

export type DigestUpdatedEventFilter = TypedEventFilter<DigestUpdatedEvent>

export interface MarkerEventObject {}
export type MarkerEvent = TypedEvent<[], MarkerEventObject>

export type MarkerEventFilter = TypedEventFilter<MarkerEvent>

export interface NSEC3DigestUpdatedEventObject {
  id: number
  addr: string
}
export type NSEC3DigestUpdatedEvent = TypedEvent<
  [number, string],
  NSEC3DigestUpdatedEventObject
>

export type NSEC3DigestUpdatedEventFilter =
  TypedEventFilter<NSEC3DigestUpdatedEvent>

export interface RRSetUpdatedEventObject {
  name: string
  rrset: string
}
export type RRSetUpdatedEvent = TypedEvent<
  [string, string],
  RRSetUpdatedEventObject
>

export type RRSetUpdatedEventFilter = TypedEventFilter<RRSetUpdatedEvent>

export interface TestEventObject {
  t: BigNumber
}
export type TestEvent = TypedEvent<[BigNumber], TestEventObject>

export type TestEventFilter = TypedEventFilter<TestEvent>

export interface DNSSECImpl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: DNSSECImplInterface

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
    algorithms(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    anchors(overrides?: CallOverrides): Promise<[string]>

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: DNSSEC.RRSetWithSignatureStruct,
      nextClosest: DNSSEC.RRSetWithSignatureStruct,
      dnskey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    nsec3Digests(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    /**
     * Returns data about the RRs (if any) known to this oracle with the provided type and name.
     * @param dnstype The DNS record type to query.
     * @param name The name to query, in DNS label-sequence format.
     */
    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[number, number, string]>

    /**
     * Sets the contract address for a signature verification algorithm.      Callable only by the owner.
     * @param algo The address of the algorithm contract.
     * @param id The algorithm ID
     */
    setAlgorithm(
      id: BigNumberish,
      algo: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    /**
     * Sets the contract address for a digest verification algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setDigest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    /**
     * Sets the contract address for an NSEC3 digest algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setNSEC3Digest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    submitRRSet(
      input: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    submitRRSets(
      input: DNSSEC.RRSetWithSignatureStruct[],
      _proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  algorithms(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  anchors(overrides?: CallOverrides): Promise<string>

  deleteRRSet(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    nsec: DNSSEC.RRSetWithSignatureStruct,
    proof: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  deleteRRSetNSEC3(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    closestEncloser: DNSSEC.RRSetWithSignatureStruct,
    nextClosest: DNSSEC.RRSetWithSignatureStruct,
    dnskey: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  nsec3Digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  /**
   * Returns data about the RRs (if any) known to this oracle with the provided type and name.
   * @param dnstype The DNS record type to query.
   * @param name The name to query, in DNS label-sequence format.
   */
  rrdata(
    dnstype: BigNumberish,
    name: BytesLike,
    overrides?: CallOverrides,
  ): Promise<[number, number, string]>

  /**
   * Sets the contract address for a signature verification algorithm.      Callable only by the owner.
   * @param algo The address of the algorithm contract.
   * @param id The algorithm ID
   */
  setAlgorithm(
    id: BigNumberish,
    algo: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  /**
   * Sets the contract address for a digest verification algorithm.      Callable only by the owner.
   * @param digest The address of the digest contract.
   * @param id The digest ID
   */
  setDigest(
    id: BigNumberish,
    digest: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  /**
   * Sets the contract address for an NSEC3 digest algorithm.      Callable only by the owner.
   * @param digest The address of the digest contract.
   * @param id The digest ID
   */
  setNSEC3Digest(
    id: BigNumberish,
    digest: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  submitRRSet(
    input: DNSSEC.RRSetWithSignatureStruct,
    proof: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  submitRRSets(
    input: DNSSEC.RRSetWithSignatureStruct[],
    _proof: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    algorithms(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    anchors(overrides?: CallOverrides): Promise<string>

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: DNSSEC.RRSetWithSignatureStruct,
      nextClosest: DNSSEC.RRSetWithSignatureStruct,
      dnskey: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    nsec3Digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    /**
     * Returns data about the RRs (if any) known to this oracle with the provided type and name.
     * @param dnstype The DNS record type to query.
     * @param name The name to query, in DNS label-sequence format.
     */
    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[number, number, string]>

    /**
     * Sets the contract address for a signature verification algorithm.      Callable only by the owner.
     * @param algo The address of the algorithm contract.
     * @param id The algorithm ID
     */
    setAlgorithm(
      id: BigNumberish,
      algo: string,
      overrides?: CallOverrides,
    ): Promise<void>

    /**
     * Sets the contract address for a digest verification algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setDigest(
      id: BigNumberish,
      digest: string,
      overrides?: CallOverrides,
    ): Promise<void>

    /**
     * Sets the contract address for an NSEC3 digest algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setNSEC3Digest(
      id: BigNumberish,
      digest: string,
      overrides?: CallOverrides,
    ): Promise<void>

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>

    submitRRSet(
      input: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    submitRRSets(
      input: DNSSEC.RRSetWithSignatureStruct[],
      _proof: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>
  }

  filters: {
    'AlgorithmUpdated(uint8,address)'(
      id?: null,
      addr?: null,
    ): AlgorithmUpdatedEventFilter
    AlgorithmUpdated(id?: null, addr?: null): AlgorithmUpdatedEventFilter

    'DigestUpdated(uint8,address)'(
      id?: null,
      addr?: null,
    ): DigestUpdatedEventFilter
    DigestUpdated(id?: null, addr?: null): DigestUpdatedEventFilter

    'Marker()'(): MarkerEventFilter
    Marker(): MarkerEventFilter

    'NSEC3DigestUpdated(uint8,address)'(
      id?: null,
      addr?: null,
    ): NSEC3DigestUpdatedEventFilter
    NSEC3DigestUpdated(id?: null, addr?: null): NSEC3DigestUpdatedEventFilter

    'RRSetUpdated(bytes,bytes)'(
      name?: null,
      rrset?: null,
    ): RRSetUpdatedEventFilter
    RRSetUpdated(name?: null, rrset?: null): RRSetUpdatedEventFilter

    'Test(uint256)'(t?: null): TestEventFilter
    Test(t?: null): TestEventFilter
  }

  estimateGas: {
    algorithms(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    anchors(overrides?: CallOverrides): Promise<BigNumber>

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: DNSSEC.RRSetWithSignatureStruct,
      nextClosest: DNSSEC.RRSetWithSignatureStruct,
      dnskey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    digests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    nsec3Digests(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Returns data about the RRs (if any) known to this oracle with the provided type and name.
     * @param dnstype The DNS record type to query.
     * @param name The name to query, in DNS label-sequence format.
     */
    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    /**
     * Sets the contract address for a signature verification algorithm.      Callable only by the owner.
     * @param algo The address of the algorithm contract.
     * @param id The algorithm ID
     */
    setAlgorithm(
      id: BigNumberish,
      algo: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    /**
     * Sets the contract address for a digest verification algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setDigest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    /**
     * Sets the contract address for an NSEC3 digest algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setNSEC3Digest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    submitRRSet(
      input: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    submitRRSets(
      input: DNSSEC.RRSetWithSignatureStruct[],
      _proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    algorithms(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    anchors(overrides?: CallOverrides): Promise<PopulatedTransaction>

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: DNSSEC.RRSetWithSignatureStruct,
      nextClosest: DNSSEC.RRSetWithSignatureStruct,
      dnskey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    digests(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    nsec3Digests(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Returns data about the RRs (if any) known to this oracle with the provided type and name.
     * @param dnstype The DNS record type to query.
     * @param name The name to query, in DNS label-sequence format.
     */
    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    /**
     * Sets the contract address for a signature verification algorithm.      Callable only by the owner.
     * @param algo The address of the algorithm contract.
     * @param id The algorithm ID
     */
    setAlgorithm(
      id: BigNumberish,
      algo: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    /**
     * Sets the contract address for a digest verification algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setDigest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    /**
     * Sets the contract address for an NSEC3 digest algorithm.      Callable only by the owner.
     * @param digest The address of the digest contract.
     * @param id The digest ID
     */
    setNSEC3Digest(
      id: BigNumberish,
      digest: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    submitRRSet(
      input: DNSSEC.RRSetWithSignatureStruct,
      proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    submitRRSets(
      input: DNSSEC.RRSetWithSignatureStruct[],
      _proof: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}
