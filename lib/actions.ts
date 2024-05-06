import { Category, Tag, Project } from "./types";
import prisma from "./prisma";
import { cache } from 'react';

export const getProject = cache(async (slug: string): Promise<Project> => {
  const project = await prisma.project.findMany({
    where: {
      slug
    },
    include: {
      category: true,
      tags: true
    }
  })
  return project[0]
})

export const getCategory = cache(async (slug?: string): Promise<Category[]> => {
  if (slug) {
    const category = await prisma.category.findMany({
      where: {
        slug
      },
      include: {
        projects: true
      }
    })
    return category
  }
  else {
    const categories = await prisma.category.findMany();
    return categories;
  }
})

export const getTag = cache(async (slug?: string): Promise<Tag[]> => {
  if (slug) {
    const tag = await prisma.tag.findMany({
      where: {
        slug
      },
      include: {
        projects: true
      }
    })
    return tag;
  }
  else {
    const tags = await prisma.tag.findMany();
    return tags;
  }
})