import Image from "next/image";

const page = () => {
  return (
    <div className="text-white min-h-screen">
      <h1 className="text-center text-2xl font-extrabold text-red-600">
        Using Regular Image Tag
      </h1>
      <img
        src="https://i.postimg.cc/J4ZbsMdc/1684299110270.jpg"
        width="250"
        height="250"
        alt="profile-portrait"
        className=" mx-auto mt-10 border-4"
      />
      <h1 className="text-center text-2xl font-extrabold mt-20 text-green-600">
        Using Next Image Tag
      </h1>
      <Image
        src="https://i.postimg.cc/J4ZbsMdc/1684299110270.jpg"
        width="250"
        height="250"
        className="mx-auto mt-10 border-4"
      />
    </div>
  );
};

export default page;
