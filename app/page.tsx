"use client"

import Post from "@/components/Post";
import { useState } from "react";
import Navbar from "@/components/Navbar"
import Image from "next/image";
import Footer from "@/components/Footer"
import Link from "next/link";


export default function Home() {
  const [task, setTask] = useState([])
  return (
    <main className="flex min-h-screen flex-col">
        <Navbar text="Home"/>
        <Image src={"/street.jpeg"} alt="Street" width={360} height={48}  className="rounded-xl mx-auto mt-24 shadow-md shadow-black/25"/>
        <Footer/>
        <div className="w-[360px] mx-auto mt-5">
          <div className="font-bold text-xl mb-2">Suggested places to adopt</div>
          <Post 
          title="Ickburgh Road" 
          description="200m of road"
          distance=".2"
          heros={1}
          herosNeeded={4}
          />
          <Post 
          title="Brooke Road" 
          description="400m of road"
          distance=".15"
          heros={2}
          herosNeeded={4}
          />
          <Post 
          title="Lea Bridge Roundaboaut" 
          description="300m of road"
          distance=".22"
          heros={0}
          herosNeeded={6}
          />
          <div 
            className='bg-pTeal w-[360px] h-16 mx-auto rounded-xl text-4xl p-3 text-center shadow-md shadow-black/25 hover:bg-neutral-200 cursor-pointer mt-8'>
              <Link href="/streets">More</Link>
          </div>
        </div>
    </main>
  );
}

{/* <p className="text-center p-5 mb-10">Seems like you did not sign up for change yet. Have a look at some local streets:</p>
<Post 
title="Post 1" 
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aut tenetur alias beatae iusto non magni velit, quae id voluptate reprehenderit placeat maiores quo harum officia commodi numquam architecto. Quas?"
heros={2}
herosNeeded={4}
/>
<Post 
title="Post 2" 
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aut tenetur alias beatae iusto non magni velit, quae id voluptate reprehenderit placeat maiores quo harum officia commodi numquam architecto. Quas?"
heros={2}
herosNeeded={3}
/>
<Post 
title="Post 3" 
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aut tenetur alias beatae iusto non magni velit, quae id voluptate reprehenderit placeat maiores quo harum officia commodi numquam architecto. Quas?"
heros={1}
herosNeeded={2}
/> */}