import NavBar from '../components/NavBar.tsx'
import Discount from '../components/Discount.tsx'
import CategoryOne from '../components/CategoryOne.tsx'
import CategoryTwo from './../components/CategoryTwo';
const Home = () => {
  return (
    <div>
      <Discount />
      <NavBar />
      <CategoryOne />
      <CategoryTwo />
      
    </div>
  )
}

export default Home
