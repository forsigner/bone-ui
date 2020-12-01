import React, { useEffect, useRef, useState } from 'react'
import { Drawer } from '@bone-ui/drawer'

export default function InputDemo() {
  const [state, setState] = useState(true)

  return (
    <div>
      <Drawer
        header="提示"
        content="
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        "
        footer="嘿嘿嘿"
        isOpened={state}
        onOpen={() => setState(true)}
        onClose={() => { setState(false) }}
      />
      <div onClick={() => setState(!state)}>{state ? '关闭' : '打开'}</div>
    </div>
  )
}
