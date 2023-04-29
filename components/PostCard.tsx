import { useRouter } from "next/router"
import { useCallback } from "react";
import { PostProps } from "../types";

export const PostCard = ({ post }: PostProps) => {
    const router = useRouter();

    const handlePostClick  = useCallback(() => {
        router.push(`/post/${post.sys.id}`)
    },[])


    return(
        <div className="w-[27.75rem]" onClick={handlePostClick}>
            <img className="w-full h-60 object-cover rounded-[1.25rem] cursor-pointer mb-[1.25rem] hover:opacity-90" alt="Post Thumbnail" src={post.fields.thumbnail.fields.file.url} />
            <h3 className="font-bold mb-[0.625rem] text-2xl">{post.fields.title}</h3>
            <span className='text-lg'>{post.fields.description}</span>
        </div>
    )
}