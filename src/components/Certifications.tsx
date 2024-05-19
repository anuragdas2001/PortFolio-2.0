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
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Y9YDNVJALKGG/CERTIFICATE_LANDING_PAGE~Y9YDNVJALKGG.jpeg",
    },{
      id: 2,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/Coursera VHZR6DKZ6UZP_page-0001.jpg",
    },
    {
      id: 3,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SB8GD6RAUJPK/CERTIFICATE_LANDING_PAGE~SB8GD6RAUJPK.jpeg",
    },
    {
      id: 4,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SF5TQZ6NWV34/CERTIFICATE_LANDING_PAGE~SF5TQZ6NWV34.jpeg",
    },
    {
      id: 5,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~J4T8QDNU8VUQ/CERTIFICATE_LANDING_PAGE~J4T8QDNU8VUQ.jpeg",
    },{
      id: 6,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KJTUALC9HLAA/CERTIFICATE_LANDING_PAGE~KJTUALC9HLAA.jpeg",
    },{
      id: 7,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JGX6RC3AZX5L/CERTIFICATE_LANDING_PAGE~JGX6RC3AZX5L.jpeg",
    },{
      id: 8,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DHYYKCVHDHXW/CERTIFICATE_LANDING_PAGE~DHYYKCVHDHXW.jpeg",
    },{
      id: 9,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PJE9TAWQ94HX/CERTIFICATE_LANDING_PAGE~PJE9TAWQ94HX.jpeg",
    },{
      id: 10,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RGEJDZ3LNUYW/CERTIFICATE_LANDING_PAGE~RGEJDZ3LNUYW.jpeg",
    },
    {
      id: 11,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DE5EMMTH829A/CERTIFICATE_LANDING_PAGE~DE5EMMTH829A.jpeg",
    },
    {
      id: 12,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FBJAELDLRR4E/CERTIFICATE_LANDING_PAGE~FBJAELDLRR4E.jpeg",
    },
    {
      id: 13,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6H3MVA5ZA9DR/CERTIFICATE_LANDING_PAGE~6H3MVA5ZA9DR.jpeg",
    },
    {
      id: 14,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/Frontend_page-0001.jpg",
    },{
      id: 15,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/Backend_page-0001.jpg",
    },
    {
      id: 16,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/certificate177307189ef448573c36cc9a17780c744db851b_page-0001.jpg",
    },
    {
      id: 17,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/certificate1773072221c57f7625f24f4847367e55d9c9119_page-0001.jpg",
    },
    {
      id: 18,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/certificate177307352b7ec1f2d066bc29385d38b3c54f7e4_page-0001.jpg",
    },
    {
      id: 19,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/certificate28681851d8be6c7f7eb5277a8f4cdb3ae1e95b5_page-0001.jpg",
    },{
      id: 20,
      content: <CertificationSkeleton />,
      className: "col-span-1",
      thumbnail:
        "certificates/FE-cert_page-0001.jpg",
    },
    
  ];
  return (
    <>
      <div className="h-auto py-20 ">
        <h1 className="text-center text-3xl ">Certifications</h1>
        <LayoutGrid cards={cards} />
      </div>
    </>
  );
};
