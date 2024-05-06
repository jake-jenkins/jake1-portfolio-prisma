export type Project = {
    slug: string
    title: string
    summary: string
    imageUrl?: string
    category?: Category
    tags?: Tag[]
    categorySlug: string
}

export type Category = {
    slug: string
    title: string
    projects?: Project[]
}

export type Tag = {
    slug: string
    title: string
    projects?: Project[]
}