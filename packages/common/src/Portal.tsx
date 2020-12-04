import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const Portal = ({ children }: any) => {
  const [node, setNode] = useState<any>(null)

  useEffect(() => {
    const $node = document.createElement('div')
    document.body.appendChild($node)
    setNode($node)

    return () => {
      document.body.removeChild($node)
    }
  }, [])

  return node && ReactDOM.createPortal(children, node)
}
