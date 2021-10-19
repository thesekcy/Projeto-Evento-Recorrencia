import { useState, useEffect } from 'react'

function useSubscriptionUrl() {
  const [url, setUrl] = useState(0)

  useEffect(() => {
    setUrl(`https://inscricao.recorrencia.com.br/cadastre-se${location.search}`)
  }, [])

  return url
}

export default useSubscriptionUrl
