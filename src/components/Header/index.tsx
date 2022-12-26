import coverImg from '../../assets/cover.svg';

import './styles.scss';

export function Header() {
  return (
    <header className='header-container'>
      <img src={coverImg} />
    </header>
  )
}
