import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images(){

  const mockImages = await db.query.images.findMany({
    orderBy: (model, { desc}) => desc(model.name)
  });

  return (
    mockImages.map((image) => (
      <div key={image.id} className="rounded-lg overflow-hidden shrink ">
        <a href={`/image/${image.id}`}>
          <img src={image.url} alt="image" className="w-64 rounded-lg" />
          <div>{image.name}</div>
        </a>
      </div>
    ))
  )
}

export default async function HomePage() {


  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-3 p-3">
        <SignedOut>
          <div className="text-2xl text-center py-6 flex-1">Please sign in above...</div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      
      </div>
    </main>
  );
}
