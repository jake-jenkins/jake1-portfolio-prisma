import { getCategories, getProjects, getTags } from "@/actions"


export const baseUrl = "https://www.jake1.net"

function buildEntry(item: any, frequency: string, priority: number, basePath?: string) {
    return {
        url: basePath ? `${baseUrl}/${basePath}/${item.slug}` : `${baseUrl}/${item.slug}`,
        lastModified: item.date_updated || item.date_created || new Date(),
        changeFrequency: frequency,
        priority,
    }
}

async function buildSiteMap() {
    let urls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        }
    ]

    const categories = await getCategories()
    const tags = await getTags()
    const projects = await getProjects()

    categories?.map((category: any) => {
        let res = buildEntry(category, "weekly", 0.8)
        urls.push(res)
    })

    tags?.map((tag: any) => {
        let res = buildEntry(tag, "weekly", 0.8, "tech")
        urls.push(res)
    })

    projects?.map((project: any) => {
        let res = buildEntry(project, "weekly", 0.5, project.category)
        urls.push(res)
    })

    return urls
}

export default async function sitemap() {
    const sitemap = await buildSiteMap()
    return sitemap
}