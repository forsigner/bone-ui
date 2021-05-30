import React, { useState } from 'react'
import { Modal, ModalContent, ModalOverlay } from '@bone-ui/modal'
import { Box } from '@fower/react'
import { Button } from '@bone-ui/button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box bgGreen200 mt-100>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <Box p20>
            gogog
            <Button onClick={() => setIsOpen(false)}>submit</Button>
          </Box>
        </ModalContent>
      </Modal>
      <div onClick={() => setIsOpen(true)}>open</div>
    </Box>
  )
}
