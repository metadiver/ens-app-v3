import type { TFunction } from 'react-i18next'

import { Transaction, TransactionDisplayItem, TransactionFunctionParameters } from '@app/types'
import { getChainContractAddress } from '@ensdomains/ensjs/contracts'
import { getResolver } from '@ensdomains/ensjs/public'
import { setAddressRecord } from '@ensdomains/ensjs/wallet'
import { Address } from 'viem'

type Data = {
  name: string
  address: Address
  latestResolver?: boolean
}

const displayItems = (
  { name, address, latestResolver }: Data,
  t: TFunction<'translation', undefined>,
): TransactionDisplayItem[] => [
  {
    label: 'name',
    value: name,
    type: 'name',
  },
  {
    label: 'info',
    value: latestResolver
      ? t(`transaction.info.updateEthAddressOnLatestResolver`)
      : t(`transaction.info.updateEthAddress`),
  },
  {
    label: 'address',
    value: address,
    type: 'address',
  },
]

const transaction = async ({ publicClient, walletClient, data }: TransactionFunctionParameters<Data>) => {
  const resolverAddress = data?.latestResolver
    ? getChainContractAddress({ client: publicClient, contract: 'ensPublicResolver' })
    : await getResolver(publicClient, { name: data.name })
  if (!resolverAddress) throw new Error('No resolver found')
  return setAddressRecord.makeFunctionData(walletClient, {
    name: data.name,
    resolverAddress,
    coin: 'ETH',
    value: data.address,
  })
}

export default { displayItems, transaction } satisfies Transaction<Data>
