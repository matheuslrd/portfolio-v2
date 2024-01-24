import { useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { Events, Link, scrollSpy } from 'react-scroll';
import elevatorMusicPath from '../../data/elevator-music.mp3';
import elevatorBellPath from '../../data/elevator-bip2.m4a?url';

export default function BackToTheTop() {
  useEffect(() => {
    const elevatorMusic = new Audio(elevatorMusicPath);
    const elevatorBip = new Audio(elevatorBellPath);

    elevatorBip.volume = 1;
    elevatorMusic.volume = 0.3;
    Events.scrollEvent.register('begin', () => {
      elevatorMusic.play();
    });

    Events.scrollEvent.register('end', () => {
      elevatorBip.play();
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="Icon-Back-To-Home">
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={6700}
      >
        <BiUpArrowAlt className="Back-To-Home" size="2.5em" />
      </Link>
    </div>
  );
}
