import { z, defineCollection } from "astro:content";


const zNamedUrlEntry = z.object({
    name: z.string(),
    url: z.string().url()
})

const projectsCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        id: z.string().optional(),
        image: z.string().url(),
        links: z.array(zNamedUrlEntry)
    })
})

const wipProjectsCollection = defineCollection({
    type: "data",
    schema: z.array(zNamedUrlEntry)
})

export const collections = {
    'projects': projectsCollection,
    'wip-projects': wipProjectsCollection
}