import Head from 'next/head'
import { Layout } from '../components/Layout'
import { PostCard } from '../components/PostCard';
import { getPosts } from '../services/content';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { PostsProps } from '../types';

export default function Home({ posts: originalPosts }: PostsProps) {
  const [highlightPost, ...posts] = originalPosts;

  const router = useRouter();

  const handleHighlightPostClick  = useCallback(() => {
      router.push(`/post/${highlightPost.sys.id}`)
  },[])

  return (
    <>
      <Head>
        <title>App News</title>
        <meta name="description" content="App News - Good News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="w-4/5 m-auto bg-white mt-[-42px] rounded-tl-[1.875rem] min-h-[21.5rem] p-6 md:p-14 flex flex-wrap-reverse justify-around cursor-pointer" onClick={handleHighlightPostClick}>
        <div className="w-[38.75rem] max-h-80">
          <h2 className="font-bold text-[#232323] text-2xl mb-[0.625rem]">{highlightPost.fields.title}</h2>
          <p className="text-lg">{highlightPost.fields.description}</p>
        </div>
        <div className="w-[35.625rem] max-h-80">
          <img alt="Thumbnail" className="w-full h-full object-cover rounded-[1.25rem] hover:opacity-90" src={highlightPost.fields.thumbnail.fields.file.url} />
        </div>
      </div>

      
      <div className='max-w-[80%] m-auto flex gap-16 flex-wrap justify-center'>
          {posts.map((post) => <PostCard key={post.sys.id} post={post}  />)}
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page){
  return <Layout title='News'>{page}</Layout>
}


export async function getServerSideProps() {
  const posts = await getPosts();

  return { props: { posts } }
}