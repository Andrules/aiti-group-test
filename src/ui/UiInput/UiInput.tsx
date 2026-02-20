import { Input, Typography } from 'antd'
import type { ChangeEvent, ReactNode } from 'react'

export interface UiInputProps {
  label?: string
  inputType: 'text' | 'password' | 'email' | 'search' | 'checkbox'
  value?: string | null
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode

  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UiInput = ({
  label,
  inputType,
  value,
  prefixIcon,
  suffixIcon,
  onChange
}: UiInputProps) => {
  return (
    <>
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <Input
        type={inputType}
        prefix={prefixIcon}
        suffix={suffixIcon}
        value={value ?? ''}
        onChange={onChange}
      />
    </>
  )
}
