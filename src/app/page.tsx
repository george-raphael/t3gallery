import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8e54231f-958f-40c8-9707-9fb417a4a27e-q9z07t.png",
  "https://utfs.io/f/6cec69b4-7a97-480e-9ef1-6ec54eba3ed7-82kk33.png",
  "https://utfs.io/f/174a3a7c-52bd-4af2-bcd6-b8a95617adeb-j3g0yd.png",
  "https://utfs.io/f/87cbc836-fc81-43e6-adcd-7e96ea9dcdd1-bbuu15.png",
  "https://utfs.io/f/0cedf047-207c-4c30-a72c-af574f347f3c-b16ii1.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id : index,
  url: url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-3 p-3">
      {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
      {
        mockImages.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shrink ">
            <a href={`/image/${image.id}`}>
              <img src={image.url} alt="image" className="w-64 rounded-lg" />
            </a>
          </div>
        ))
      }
      </div>
    </main>
  );
}
