import s from './style.module.scss'
import clsx from 'clsx'

const DynamicEcho = ({
  type = 'square',
  color = 'white',
  children,
  className,
}: {
  type?: 'echo' | 'square' | 'circle' | 'button' | 'heart' | 'small_heart'
  color?: 'yellow' | 'purple' | 'white'
  className?: string
  children: JSX.Element
}) => {
  const pulse_settings = clsx(
    {
      [s.echo]: type === 'echo',
      [s.circle]: type === 'circle',
      [s.square]: type === 'square',
      [s.button]: type === 'button',
      [s.heart]: type === 'heart',
      [s.small_heart]: type === 'small_heart',
      [s.yellow_color]: color === 'yellow',
      [s.purple_color]: color === 'purple',
      [s.white_color]: color === 'white',
    },
    className
  )

  return (
    <div className={clsx(s.pulse, pulse_settings)}>
      <div className={clsx(s.second_pulse, pulse_settings)}>{children}</div>
    </div>
  )
}

export default DynamicEcho
