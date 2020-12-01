import React, { FC } from 'react'
import { RegisterFormProps } from 'entity-form'

export const Form: FC<RegisterFormProps> = ({ children, result }) => {
  return <form onSubmit={result.handlers.handleSubmit}>{children}</form>
}
