import React from "react";
import { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

interface Props {
  name: string;
  url: string;
  img: string;
  repo: string;
  desc:string;
}

export const ProjectsItem = ({ name, url, img, repo,desc }: Props) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 text-center ">
        <Image alt="nextui logo" height={8} radius="sm" src={img} width={40} />
        <a href={url} target="_blank">
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl ms-0 text-white">{name}</p>
            {/* <p className="text-small text-default-500">{url}</p> */}
          </div>
        </a>
      </CardHeader>

      <Divider />
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={repo}
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};
