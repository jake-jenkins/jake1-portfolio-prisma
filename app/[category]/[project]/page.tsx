import { getCategories, getProject, getProjects } from "@/actions";
import Image from "next/image";
import { H1, H2, P } from "@/app/components/Typography";
import Breadcrumb from "@/app/components/Breadcrumb";
import { TagItem } from "@/app/components/TagItem";

export async function generateStaticParams() {
  const pages = await getProjects();
  return pages?.map((project: any) => ({ slug: [project.slug] })) || [];
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; project: string };
}) {
  const project: any = await getProject(params.project);
  const category: any = await getCategories(params.category);

  return {
    title: project.title + " - " + category.name + " | Jake1.net",
  };
}

export default async function Page({
  params,
}: {
  params: { category: string; project: string };
}) {
  const project: any = await getProject(params.project);

  return (
    <>
      <Breadcrumb />
      <div className="heroWrapper">
        <Image
          priority
          src={`https://pb.jake1.net/api/files/z284v9f98rft0t4/${project.id}/${project.image}`}
          alt={`${project.title} image`}
          className="heroImage"
          fill
        />
      </div>

      <div className="w-full flex-col my-16">
        <div className="max-w-[960px] w-full mx-auto">
          <H1>{project.title}</H1>
          <div className="my-12">
            <H2>Summary</H2>
            <P>{project.summary}</P>
          </div>
          <div className="my-12">
            {project.tags?.map((tag: any) => (
              <TagItem key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
