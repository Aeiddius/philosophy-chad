import style from './Button.module.scss'

type ButtonProps = {
  name: string,
  type?: 'small' | 'big' | 'default',
  handleChange?: () => void,
}

const Button = ({name, type = 'default', handleChange}: ButtonProps) => {
  return ( 
    <button onClick={handleChange} type='button'
            className={`${style[type]}`}>{name}</button>
   );
}
 
export default Button;