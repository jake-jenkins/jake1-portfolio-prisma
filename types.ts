export type Category = {
    slug: string,
    name: string
}

export type Tag = {
    slug: string,
    name: string
}

export type Project = {
    slug: string,
    created_at: Date,
    title: string,
    summary: string,
    image: string,
    category: string,
    tags?: string[]
}