import { LayoutGrid } from "./aceternityui/layout-grid";
export const Certifications = () => {
  console.log("Inside Certifications");

  const CertificationSkeleton = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white"></p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VHZR6DKZ6UZP/CERTIFICATE_LANDING_PAGE~VHZR6DKZ6UZP.jpeg",
    },
    {
      id: 2,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DE5EMMTH829A/CERTIFICATE_LANDING_PAGE~DE5EMMTH829A.jpeg",
    },
    {
      id: 3,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FBJAELDLRR4E/CERTIFICATE_LANDING_PAGE~FBJAELDLRR4E.jpeg",
    },
    {
      id: 4,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6H3MVA5ZA9DR/CERTIFICATE_LANDING_PAGE~6H3MVA5ZA9DR.jpeg",
    },
    {
      id: 5,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "../../assets/certificates/certificate177307189ef448573c36cc9a17780c744db851b_page-0001.jpg",
    },
    {
      id: 6,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "../../assets/certificates/certificate1773072221c57f7625f24f4847367e55d9c9119_page-0001.jpg",
    },
    {
      id: 7,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "../../assets/certificates//certificate177307352b7ec1f2d066bc29385d38b3c54f7e4_page-0001.jpg",
    },
    {
      id: 8,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "../../assets/certificates/certificate28681851d8be6c7f7eb5277a8f4cdb3ae1e95b5_page-0001.jpg",
    },
    {
      id: 9,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "../../assets/certificates/certificate_16165b4507c9aeae_3c64142c22e5e9014b81e638fa887cb5_page-0001.jpg",
    },
  ];
  return (
    <>
      <div className="h-auto py-20">
        <h1 className="text-center text-3xl">Certifications</h1>
        <LayoutGrid cards={cards} />
      </div>
    </>
  );
};
