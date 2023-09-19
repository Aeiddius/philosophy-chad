import style from './Home.module.scss';
import Gigachad from '../assets/gigachad.webp';
import Button from '../components/Button';
import Gigasong from '../assets/gigasong.mp3';

import { useEffect } from 'react';

const HomeRoute = () => {
  
  useEffect(() => {

    document.addEventListener('click', musicPlay);
    function musicPlay() {
        const musicplayer = document.getElementById('player')! as HTMLAudioElement
        musicplayer.play()
        document.removeEventListener('click', musicPlay);
    }
  })
  
  return ( 
    <div className={style.home}>

      {/* <div className="hide">
      <iframe src={Gigasong} allow="autoplay" id="audio"></iframe>
      </div> */}
      <audio id="player">
        <source src={Gigasong} type="audio/mp3" />
      </audio>


      <div className="flex column" id="body">
        <h1>Philosophy Chad</h1>
        <h2>A Blog where chad teaches you philosophy for shits n gigles</h2>
      </div>

      <div className='flex end'>
        <div className={`${style.menu}`}>
          <div className={style.resume}>
            <Button name='Resume' type='big'/>
            <Button name='Check Articles' type='big'/>
          </div>

          <div className={style.new}>
            <h3>Newest</h3>
            <ul className='style-none'>
              <li><Button name="Chillin' with Socrates" type='small'/></li>
              <li><Button name="Stoicism and its Effects" type='small'/></li>
              <li><Button name="The new human" type='small'/></li>
              <li><Button name="Nietzche’s Weird shit" type='small'/></li>
              <li><Button name="God and whatnot" type='small'/></li>
            </ul>
          </div>
        </div>
      </div>



      <img src={Gigachad} alt="gigaimage"/>
    </div>
   );
}
 
export default HomeRoute;