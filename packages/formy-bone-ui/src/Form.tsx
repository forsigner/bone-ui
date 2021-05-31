import React, { FC } from 'react'
import { FormRegisterProps } from '@formy/react'

export const Form: FC<FormRegisterProps> = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}
