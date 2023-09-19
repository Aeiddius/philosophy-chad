import styles from './Header.module.scss';
import Button from './Button';
import Mainlogo from '../svg/logo';
import Input from './Input';

const Header = () => {
  return ( 
    <div className={styles.header}>
      <div className="flex align-center">
        <Mainlogo/>
        <ul>
          <li><Button name='Home'/></li>
          <li><Button name='Articles'/></li>
          <li><Button name='Categories'/></li>
          <li><Button name='About'/></li>
        </ul>
      </div>

      <Input />

    </div>
   );
}
 
export default Header;