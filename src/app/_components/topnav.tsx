"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";


export function TopNav() {

const router = useRouter();

    return (
      <nav className="flex items-center justify-between bg-slate-500 p-4">
        <div className="font-bold text-white">T3 Gallery</div>
        <div className="flex flex-row items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton 
              endpoint="imageUploader"
              onClientUploadComplete={()=>{
                router.refresh()
              }} />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    );
  }