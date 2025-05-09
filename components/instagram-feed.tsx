"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Stories } from "@/components/stories"
import { Post } from "@/components/post"
import { BottomNavigation } from "@/components/bottom-navigation"

export function InstagramFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "janedoe",
      userImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Enjoying the weekend vibes! 🌞 #weekend #goodvibes",
      likes: 243,
      timeAgo: "2h",
      comments: [
        {
          username: "mike_smith",
          text: "Looks amazing! 😍",
        },
        {
          username: "sarah.j",
          text: "Have fun! 🙌",
        },
      ],
    },
    {
      id: 2,
      username: "travel_addict",
      userImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Paradise found 🏝️ #travel #vacation #beachlife",
      likes: 512,
      timeAgo: "5h",
      comments: [
        {
          username: "wanderlust",
          text: "Where is this? I need to go there!",
        },
        {
          username: "photo_lover",
          text: "Perfect shot! 📸",
        },
      ],
    },
    {
      id: 3,
      username: "foodie_adventures",
      userImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Homemade pasta night 🍝 #foodie #homecooking #pasta",
      likes: 189,
      timeAgo: "8h",
      comments: [
        {
          username: "chef_mark",
          text: "Looks delicious! Recipe please?",
        },
        {
          username: "italian_food_lover",
          text: "Nothing beats homemade pasta! 👨‍🍳",
        },
      ],
    },
  ])

  return (
    <div className="w-full max-w-md mx-auto relative pb-16">
      <header className="sticky top-0 z-10 bg-white border-b p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold font-serif">Instagram</h1>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </div>
        </div>
      </header>

      <ScrollArea className="h-[calc(100vh-120px)]">
        <Stories />

        <div className="pb-4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </ScrollArea>

      <BottomNavigation />
    </div>
  )
}
