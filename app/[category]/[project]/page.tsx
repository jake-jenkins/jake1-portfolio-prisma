import { getProject } from "@/lib/actions";
import { Project } from "@/lib/types";
import Image from "next/image";
import { H1, H2, P } from "@/app/components/Typography";
import Breadcrumb from "@/app/components/Breadcrumb";

export const revalidate = 3600;

export default async function Page({
  params,
}: {
  params: { category: string; project: string };
}) {
  const data: Project = await getProject(params.project);

  return (
    <>
    <Breadcrumb />
      <div className="heroWrapper">
        <Image
          priority
          src={`https://img.jake1.net/${data.imageUrl}`}
          alt={`${data.title} image`}
          className="heroImage"
          fill
        />
      </div>

      <div className="w-full flex-col my-16">
        <div className="max-w-[960px] w-full mx-auto">
          <H1>{data.title}</H1>
          <div className="my-12">
            <H2>Summary</H2>
            <P>{data.summary}</P>
          </div>
        </div>
      </div>
    </>
  );
}
