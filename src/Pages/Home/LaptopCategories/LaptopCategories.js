
import { useQuery } from '@tanstack/react-query';
import LaptopCategory from './LaptopCategory';

const LaptopCategories = () => {
  

  const { data: brands = [] } = useQuery({
    queryKey: ['brands'],
    queryFn: () =>
      fetch('https://social-app-server-mustafa-arkan.vercel.app/brands').then((res) => res.json()),
  });
  
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Laptop Categories
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Explore different categories of brand's laptop!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
        {brands.map((brand) => (
          <LaptopCategory key={brand._id} brand={brand}></LaptopCategory>
        ))}
      </div>
    </div>
  );
};

export default LaptopCategories;