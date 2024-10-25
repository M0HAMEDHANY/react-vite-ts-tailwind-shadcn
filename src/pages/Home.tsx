import NavBar from '../components/NavBar.tsx'
import Discount from '../components/Discount.tsx'
import CategoryOne from '../components/CategoryOne.tsx'
const Home = () => {
  return (
    <div>
      <Discount />
      <NavBar />
      <CategoryOne />
      <div className="p-4">
        <h1 className="text-3xl">Home</h1>
        <p className="text-lg">Welcome to the home page</p>
      </div>
    </div>
  )
}

export default Home
