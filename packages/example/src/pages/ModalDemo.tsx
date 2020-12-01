import React, { useState } from 'react'
import { Modal } from '@bone-ui/modal'

export default function InputDemo() {
  const [state, setState] = useState(true)

  return (
    <div>
      <Modal
        header="提示"
        content="
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        "
        footer={
          <>
            <div>关闭</div>
            <div>开启</div>
          </>
        }
        isOpened={state}
        onOpen={() => setState(true)}
        onClose={() => { setState(false) }}
        />
      <div onClick={() => setState(!state)}>{state ? '关闭' : '打开'}</div>
    </div>
  )
}
