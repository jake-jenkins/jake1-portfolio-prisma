import { getProject } from "@/lib/actions";

export const revalidate = 3600;

export default async function Page({params}: {params: {category: string, project: string}}) {
    const data = await getProject(params.project)

    return (
        <>
        <div>{JSON.stringify(data)}</div>
        </>
    )
}