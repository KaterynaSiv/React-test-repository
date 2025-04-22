export default function Product({
  name,
  imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  price,
}) {
  // console.log("imgUrl:", imgUrl);
  // console.log("typeof imgUrl:", typeof imgUrl);
  // console.log("imgUrl is undefined:", imgUrl === undefined);
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
}