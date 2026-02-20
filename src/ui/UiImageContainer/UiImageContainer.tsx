import clsx from 'clsx'

interface UiImageContainerProps {
  picUrl: string
  styles?: string
  picWidth?: number
  picHeight?: number
}

export const UiImageContainer = ({
  styles,
  picUrl,
  picWidth,
  picHeight
}: UiImageContainerProps) => {
  return (
    <div className={clsx('flex justify-center p-0', styles)}>
      <img src={picUrl} height={picHeight ?? 24} width={picWidth ?? 24} />
    </div>
  )
}
