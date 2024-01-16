import data from "../Data/data";
import UseTitle from "../Hooks/UseTitle";
import Card from "./Card";
const Home = ({ title, tshirts, setTshirts }) => {
  UseTitle(title);
  return (
    <div className="flex justify-evenly gap-10 items-strech flex-wrap my-10  ">
      {data.map((e) => (
        <Card key={e.id} {...e} tshirts={tshirts} setTshirts={setTshirts} />
      ))}
    </div>
  );
};

export default Home;
