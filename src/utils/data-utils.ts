import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'published'> | CollectionEntry<'workingPaper'> | CollectionEntry<'workInProgress'>;

export async function getAllProjects() {
    const workInProgress = await getCollection('workInProgress');
    const workingPaper = await getCollection('workingPaper');
    const published = await getCollection('published');

    return {
        workInProgress: workInProgress.filter((p) => !p.data.draft),
        workingPaper: workingPaper.filter((p) => !p.data.draft),
        published: published.filter((p) => !p.data.draft)
    };
}
