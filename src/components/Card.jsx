function Card({
  title = "-",
  category = "-",
  image = "https://dummyimage.com/720x600",
  price = "-",
  onPress,
}) {
  return (
      <div onClick={onPress} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-fit object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
  );
}

export default Card;
