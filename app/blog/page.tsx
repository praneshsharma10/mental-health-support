import Image from 'next/image'
import Link from 'next/link'

const articles = [
  { id: 1, title: "Understanding Anxiety Disorders", image: "/article1.jpg" },
  { id: 2, title: "The Importance of Self-Care", image: "/article2.jpeg" },
  { id: 3, title: "Breaking the Stigma Around Mental Health", image: "/article3.jpg" },
  { id: 4, title: "Coping Strategies for Depression", image: "/article4.jpg" },
  { id: 5, title: "The Link Between Physical and Mental Health", image: "/article5.jpg" },
  { id: 6, title: "Mindfulness Techniques for Stress Relief", image: "/article6.jpg" },
]

const userStories = [
  { id: 1, title: "My Journey to Recovery", author: "Parashar" },
  { id: 2, title: "How Therapy Changed My Life", author: "Raghu" },
  { id: 3, title: "Overcoming Social Anxiety", author: "Alok" },
  { id: 4, title: "My Journey to Recovery", author: "xxxxxxxxxxx" },
  { id: 5, title: "How Therapy Changed My Life", author: "xxxxxxxxxxx" },
  { id: 6, title: "Overcoming Social Anxiety", author: "xxxxxxx" }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Mental Health Blog</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Latest Articles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/blog/${article.id}`} key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-95 hover:shadow-black transition-shadow dark:hover:shadow-white">
              <Image src={article.image} alt={article.title} width={600} height={400} className="w-full h-56 object-cover " />
              <div className="px-3 py-2 bg-white ">
                <h3 className="text-auto font-semibold text-blue-600 ">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-8">User Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          {userStories.map((story) => (
            <div key={story.id} className="w-30 h-30 bg-white p-6 rounded-lg shadow-md">
              <h3 className=" text-xl font-semibold text-blue-600 mb-2 ">{story.title}</h3>
              <p className="text-gray-600"> - {story.author}</p>
              <Link href={`/blog/story/${story.id}`} className="text-blue-600 hover:underline hover:scale-95 hover:text-purple mt-4 inline-block ">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

