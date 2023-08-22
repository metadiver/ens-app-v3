import type { TFunction } from 'react-i18next'

import type { Transaction, TransactionDisplayItem, TransactionFunctionParameters } from '@app/types'
import { transferName } from '@ensdomains/ensjs/wallet'
import type { Address } from 'viem'

type Data = {
  name: string
  newOwnerAddress: Address
  isOwner: boolean
}

const displayItems = (
  { name }: Data,
  t: TFunction<'translation', undefined>,
): TransactionDisplayItem[] => [
  {
    label: 'name',
    value: name,
    type: 'name',
  },
  {
    label: 'action',
    value: t('details.sendName.transferController', { ns: 'profile' }),
  },
]

const transaction = ({ walletClient, data }: TransactionFunctionParameters<Data>) => {
  return transferName.makeFunctionData(walletClient, {
    name: data.name,
    contract: 'registry',
    newOwnerAddress: data.newOwnerAddress,
    asParent: !data.isOwner,
  })
}

export default {
  displayItems,
  transaction,
  backToInput: true,
} satisfies Transaction<Data>
