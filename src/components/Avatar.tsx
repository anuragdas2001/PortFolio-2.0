export const Avatar = () => {
  console.log("Avatar");
  return (
    <>
      <div className="float-right items-end h-52 w-32 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-96 lg:w-96   m-10 ">
        <img
          className="rounded-full "
          src="https://pbs.twimg.com/profile_images/1778138976119037956/61OqPY9Q_400x400.jpg"
          alt="Image Description"
        />
      </div>
    </>
  );
};
