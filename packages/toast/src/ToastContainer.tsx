import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Portal } from '@bone-ui/portal'
import { css } from '@fower/core'
import { Box } from '@fower/react'
import { useToast } from './toast.store'

export const ToastContainer = () => {
  const { notifications } = useToast()
  return (
    <Portal>
      <Box
        fixed
        top0
        zIndex={5000}
        css={{
          alignSelf: 'center',
        }}
      >
        <AnimatePresence initial={false}>
          {notifications.map((item: any, index: any) => (
            <motion.div
              key={index}
              className={css('w-300', 'bgWhite', 'p-8', 'mb0', 'rounded', 'shadow')}
              initial={{ opacity: 0, y: index * 0 }}
              animate={{ opacity: 1, y: (index + 1) * 10 }}
              exit={{ opacity: 0, y: 0, transition: { duration: 0.2 } }}
            >
              {item.msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </Portal>
  )
}
