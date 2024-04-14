export const Avatar = () => {
  console.log("Avatar");
  return (
    <>
      <div className="float-right items-end -mt-5 me-8 ">
        <img
          className="h-32 w-32 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-96 lg:w-96  rounded-full"
          src="profile/IMG_20240326_214004.jpg"
          alt="Image Description"
        />
      </div>
    </>
  );
};
