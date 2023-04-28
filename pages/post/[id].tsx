import Head from "next/head";
import { Layout } from "../../components/Layout";

const placeholderThumbnail = 'https://as1.ftcdn.net/v2/jpg/03/58/54/86/1000_F_358548675_OWiuGttT2nV4HcJknRO4WWfKLDa8e29s.jpg'

const post = 
    {
      id: '1',
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Explore the vast world of Hyrule and save Princess Zelda from Calamity Ganon in this open-world adventure game.",
      thumbnail: placeholderThumbnail
    }

  

export default function Post(){
    return(
        <>
            <Head>
                <title>App News</title>
                <meta name="description" content="App News - Good News" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="w-4/5 m-auto min-h-[21.5rem] p-14">
                <div className="w-full">
                    <img alt="Post Thumbnail" src={post.thumbnail} className="w-full h-[26rem] object-cover rounded-[1.875rem]" />
                </div>
            </div>


        
        </>
    )
}

Post.getLayout = function getLayout(page){
    return <Layout title={post.title}>{page}</Layout>
  }