"use client"

import Post from "@/components/Post";
import Title from "@/components/Title";
import Container from "@/components/Container";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  const [task, setTask] = useState([])
  return (
    <main className="flex min-h-screen flex-col">
      <Sidebar/>
      <Container>
        <Title/>
        {task.length == 0 ? (
          <div>
            <p className="text-center p-5 mb-10">Seems like you did not sign up for change yet. Have a look at some local streets:</p>
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
              />
          </div>
          ) : (
            <div>

            </div>
          )}
      </Container>
    </main>
  );
}

