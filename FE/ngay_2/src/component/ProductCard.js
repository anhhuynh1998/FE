// ProductCard.js



const ProductCard = ({ label, imageUrl, discount, price, originalPrice }) => {
  return (
    <div className="border rounded-2xl hover:shadow-2xl transition duration-400">
      <div>
        <div className="flex justify-start">
          <h3 className={`px-5 py-1 text-slate-100 bg-${label}`}>{label}</h3>
        </div>
        <div className="ps-5 pe-5 pt-5">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="p-4 mb-3">
        <span>Since 2012</span>
        <div className="row flex justify-between">
          <div className="me-5">
            <h2 className="font-bold text-3xl hover:text-green-600 cursor-pointer">Nature Food</h2>
            <span className="font-thin text-slate-400">
              <span className="text-xs text-amber-300">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              (4.0)
            </span>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-3">
        <ul>
          <li>
            <h3>
              <span className="text-slate-300">By </span>
              <span className="hover:text-orange-400 cursor-pointer text-green-600">NestFood</span>
            </h3>
          </li>
        </ul>
      </div>
      <div className="ml-4 justify-between text-center flex">
        <div>
          <span className="font-bold text-green-400">${price}</span>
          <span className="line-through absolute inset-y1/2 h-0.5 ml-4">${originalPrice}</span>
        </div>
        <div>
          <button className="btn btn-green transition duration-700 bg-green-200 w-16 rounded-md h-8 mb-10 mr-7">
            <i className="fa-solid fa-cart-plus"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
