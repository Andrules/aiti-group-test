import {
  CloseOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import Link from 'antd/es/typography/Link'
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
    <div className='w-131.75 h-179 flex items-center justify-center bg-whit border border-gray1 rounded-[40px] __form-shadow '>
      <div
        className='w-128.75 h-176 p-12 
                   __flex-col-center gap-8
                   rounded-[34px] __form-bg-gradient'
      >
        <UiImageContainer
          picUrl='/src/assets/images/logo.png'
          picHeight={32}
          picWidth={32}
          styles='w-13 h-13 rounded-full p-2 border-1 border-white __logo-bg-gradient __logo-shadow'
        />

        <div className='__flex-col-center'>
          <Typography.Text
            style={{
              fontSize: '40px',
              fontWeight: '500'
            }}
          >
            Добро пожаловать!
          </Typography.Text>
          <Typography.Text style={{ fontSize: '18px', color: '#E0E0E0' }}>
            Пожалуйста, авторизуйтесь
          </Typography.Text>
        </div>
        <Form layout='vertical' className='w-full p-12'>
          <Form.Item label='Почта'>
            <Input
              value={emailValue}
              onChange={handleChangeEmail}
              prefix={<UserOutlined />}
              suffix={<CloseOutlined onClick={() => setEmailValue('')} />}
              style={{ height: '55px', borderRadius: '12px' }}
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
              style={{ height: '55px', borderRadius: '12px' }}
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
              style={{
                height: '55px',
                borderRadius: '12px',
                marginBottom: '0',
                background: '#242EDB'
              }}
            >
              Войти
            </Button>
          </Form.Item>
          <div className='flex flex-row justify-between items-center'>
            <div className='w-full h-0 border-b text-[#EDEDED]' />
            <p className='p-1 bg-white text-[#EDEDED]'>или</p>
            <div className='w-full h-0 border-b text-[#EDEDED]' />
          </div>
        </Form>
        <Typography.Text style={{ fontSize: '18px' }}>
          Нет аккаунта?{' '}
          <Link
            style={{
              fontSize: '18px',
              color: '#242EDB',
              borderBottom: '2px solid #242EDB'
            }}
          >
            Создать
          </Link>
        </Typography.Text>
      </div>
    </div>
  )
}
