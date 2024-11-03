import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from '../data/Uploader'

export default function Sidebar() {
  return (
    <div className="bg--500 p-8 border-r border-gray-100 h-full box">
      <Logo />
      <MainNav />
      <Uploader/>
    </div>
    
  )
}
