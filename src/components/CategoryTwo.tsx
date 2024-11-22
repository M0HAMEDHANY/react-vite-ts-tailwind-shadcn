import categoryOne from '../assets/catone.png'
import Button from './Button'
const CategoryTwo = () => {
    return (
        <>
            <div className="relative" style={{ height: '89vh' }}>
                <div className="absolute text-white text-left ml-5 z-10" style={{ top: '450px' }} >
                    <h1 className="text-8xl font-lalezar">Wardrobe essentials & Knits</h1>
                    <h1 className="text-2xl font-inter opacity-80">Explore refined knitwear for a versatile autumn wardrobe</h1>
                    <Button />
                </div>
                <img src={categoryOne} alt="catone" className='w-full h-full -z-10 shadow-lg' style={{ filter: 'brightness(30%)' }} />
            </div>
        </>
    )
}

export default CategoryTwo
