import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Card({ data }) {
  console.log(data);

  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300 bg-gray-50">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
        src={data.image}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{data.title}</h2>
      <p className="text-center text-4xl font-bold">{data.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{data.perks[0]}</p>
        <p className="py-2 border-b mx-8">{data.perks[1]}</p>
        <p className="py-2 border-b mx-8">{data.perks[2]}</p>
      </div>
      <button className="mt-2">Start Trial</button>
    </div>
  );
}

function Cards() {
  const data = [
    {
      title: "Single User",
      price: "$149",
      perks: ["500 GB storage", "1 Granted User", "Send up to 2 GB"],
      image: Single,
    },
    {
      title: "Double User",
      price: "$299",
      perks: ["1000 GB storage", "2 Granted Users", "Send up to 4 GB"],
      image: Double,
    },
    {
      title: "Triple User",
      price: "$499",
      perks: ["2000 GB storage", "3 Granted Users", "Send up to 6 GB"],
      image: Triple,
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {data.map((cardData) => (
          <Card data={cardData} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
