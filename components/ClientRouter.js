import { useRouter } from 'next/router'
import { useClientRouting } from '@shopify/app-bridge-react';

const ClientRouter = () => {
  const router = useRouter()

  useClientRouting(router)
  return null
}

export default ClientRouter