import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined
} from '@ant-design/icons'

import { UiInput, type UiInputProps } from '../UiInput/UiInput'

export type UiPasswordInputProps = Pick<UiInputProps, 'value' | 'onChange'> & {
  isShow: boolean
  onShow: () => void
}

export const UiPasswordInput = ({
  isShow,
  onShow,
  onChange,
  value
}: UiPasswordInputProps) => {
  return (
    <UiInput
      inputType={isShow ? 'text' : 'password'}
      label='Пароль'
      value={value}
      onChange={onChange}
      prefixIcon={<LockOutlined />}
      suffixIcon={
        isShow ? (
          <EyeOutlined onClick={onShow} />
        ) : (
          <EyeInvisibleOutlined onClick={onShow} />
        )
      }
    />
  )
}
