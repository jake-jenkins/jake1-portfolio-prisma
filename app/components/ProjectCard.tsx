import Link from "next/link";
import Image from "next/image";
import { H2, P } from "./Typography";

export default async function ProjectCard({ project }: { project: any }) {
    return (
      <Link
        href={`/${project.expand.category.slug}/${project.slug}`}
        className="rounded-t-2xl rounded-b-3xl border border-white border-opacity-40 dark:bg-slate-800 bg-slate-300 bg-opacity-25 dark:hover:border-white"
      >
        <Image
          className="rounded-t-2xl"
          src={`https://pb.jake1.net/api/files/z284v9f98rft0t4/${project.id}/${project.image}`}
          width={800}
          height={380}
          alt={`${project.title} image`}
        />
        <div className="p-4">
          <div className="h-24 flex items-center">
            <H2>{project.title}</H2>
          </div>
          <P>{project.summary}</P>
        </div>
      </Link>
    );
}