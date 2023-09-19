import style from './Input.module.scss';

const Input = () => {
  return ( 
    <div className={`${style.input} flex align-center`}>
      <input type="search" placeholder='Search...'/>
      <button className={style.btn} type="submit">Search</button>
    </div>
   );
}
 
export default Input;