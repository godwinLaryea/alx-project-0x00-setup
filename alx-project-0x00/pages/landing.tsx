import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
      </div>
      <Card />
      <Card />
      <Card />
      <Button title="Small" styles="text-sm rounded-sm bg-sky-200 p-2 mb-2 cursor-pointer" />
      <Button title="Medium" styles="text-md rounded-md bg-sky-300 p-2 mb-2 cursor-pointer" />
      <Button title="Large" styles="text-lg rounded-full bg-sky-400 px-4 py-1 cursor-pointer" />
    </>
  );
};

export default Landing;
