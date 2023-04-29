import Contentful, { Entry, createClient } from "contentful";
import { Document } from "@contentful/rich-text-types/dist/types/types";

export type PostDataProps = Entry<{
    contentTypeIdts: string;
    title: Contentful.EntryFields.Text;
    description: Contentful.EntryFields.Text;
    thumbnail: Contentful.Asset;
    content: Document
}>

const client = createClient({
    space: 'rsx5t3cwul7q',
    accessToken: 'okAZUCe_413ofmLo__ivCcL21py4avtcDtkk4ChJOaQ'
});



export async function getPosts(): Promise<Contentful.Entry<PostDataProps>[]> {
    const { items }  = await client.getEntries<PostDataProps>({
        content_type: 'post'
    })

    return items;
}

export async function getPost(postId: string): Promise<Contentful.Entry<PostDataProps>> {
    const post  = await client.getEntry<PostDataProps>(postId)

    return post;
}