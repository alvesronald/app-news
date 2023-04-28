import Head from 'next/head'
import { Layout } from '../components/Layout'
import { PostCard } from '../components/PostCard';

const placeholderThumbnail = 'https://as1.ftcdn.net/v2/jpg/03/58/54/86/1000_F_358548675_OWiuGttT2nV4HcJknRO4WWfKLDa8e29s.jpg'


const posts = [
  {
    id: '1',
    title: "The Legend of Zelda: Breath of the Wild",
    description: "Explore the vast world of Hyrule and save Princess Zelda from Calamity Ganon in this open-world adventure game.",
    thumbnail: placeholderThumbnail
  },
  {
    id:'2',
    title: "Super Mario Odyssey",
    description: "Join Mario on a globe-trotting adventure to save Princess Peach from Bowser's clutches.",
    thumbnail: placeholderThumbnail
  },
  {
    id: '3',
    title: "Overwatch",
    description: "Join the world's heroes and compete in intense 6v6 team battles in this first-person shooter.",
    thumbnail: placeholderThumbnail
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>App News</title>
        <meta name="description" content="App News - Good News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="w-4/5 m-auto bg-white mt-[-42px] rounded-tl-[1.875rem] min-h[21.5rem] p-6 md:p-14 flex flex-wrap-reverse">
        <div className='w-[38.78rem] max-h-80 '>
          <h2 className='font-bold text-[#232323] text-2xl mb-[0.625rem]'>Minecraft Pocket Edition 2023</h2>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci iste quae illum recusandae officiis officia impedit iusto voluptas provident, vel incidunt rerum eaque obcaecati quod fuga sapiente assumenda dolores harum.</p>
        </div>

        <div className='w-[35.625rem] max-h-80'>
          <img alt='Thumbnail' className='w-full h-full object-cover rounded-[1.25rem]' src='https://as1.ftcdn.net/v2/jpg/03/58/54/86/1000_F_358548675_OWiuGttT2nV4HcJknRO4WWfKLDa8e29s.jpg' />
        </div>
      </div>

      
      <div className='max-w-[80%] m-auto flex gap-16 flex-wrap justify-center'>
          {posts.map((post) => <PostCard key={String(post.id)} post={post}  />)}
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page){
  return <Layout title='News'>{page}</Layout>
}