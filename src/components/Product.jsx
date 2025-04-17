export default function Product({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) {
  console.log("imgUrl:", imgUrl);
  console.log("typeof imgUrl:", typeof imgUrl);
  console.log("imgUrl is undefined:", imgUrl === undefined);
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
}
