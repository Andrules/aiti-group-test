import {
  CloseOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { type ChangeEvent, useState } from 'react'

import { UiImageContainer } from '@/ui/UiImageContainer/UiImageContainer'

export const AuthForm = () => {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password'
  )
  const [emailValue, setEmailValue] = useState<string>('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value)
  }

  const handleShowPassword = () => {
    setPasswordType((prev) => (prev === 'text' ? 'password' : 'text'))
  }

  const handleSubmitForm = () => {
    // not Finished yet
  }

  return (
    <div className='w-131.75 h-179 flex items-center justify-center bg-white border border-[#EDEDED] rounded-[40px]'>
      <div
        className='w-128.75 h-176 p-2 flex flex-col items-center 
                    border border-[#EDEDED] rounded-[34px]
                    bg-linear-to-b from-[rgba(35,35,35,0.03)] to-[rgba(35,35,35,0)]'
      >
        <UiImageContainer
          picUrl='/src/assets/images/logo.png'
          picHeight={32}
          picWidth={32}
          styles='border rounded-full w-[52px] h-[52px] bg-linear-white'
        />

        <Typography.Title className='text-center'>Welcome!</Typography.Title>
        <Form layout='vertical' className='w-full p-12'>
          <Form.Item label='Почта'>
            <Input
              value={emailValue}
              onChange={handleChangeEmail}
              prefix={<UserOutlined />}
              suffix={<CloseOutlined onClick={() => setEmailValue('')} />}
            />
          </Form.Item>
          <Form.Item label='Пароль'>
            <Input
              prefix={<LockOutlined />}
              suffix={
                passwordType === 'text' ? (
                  <EyeOutlined onClick={handleShowPassword} />
                ) : (
                  <EyeInvisibleOutlined onClick={handleShowPassword} />
                )
              }
            />
          </Form.Item>
          <Form.Item>
            <Checkbox
              onChange={() => console.log('should be cached Login + Password')}
            >
              Запомнить данные
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              className='w-full'
              onSubmit={handleSubmitForm}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
