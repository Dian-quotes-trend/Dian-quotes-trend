"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"

interface Comment {
  username: string
  text: string
}

interface PostProps {
  post: {
    id: number
    username: string
    userImage: string
    image: string
    caption: string
    likes: number
    timeAgo: string
    comments: Comment[]
  }
}

export function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showAllComments, setShowAllComments] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  const toggleSave = () => {
    setSaved(!saved)
  }

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.userImage || "/placeholder.svg"} alt={post.username} />
            <AvatarFallback>{post.username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">{post.username}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative aspect-square w-full">
        <Image src={post.image || "/placeholder.svg"} alt="Post image" fill className="object-cover" priority />
      </div>

      <div className="px-4 pt-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={toggleLike}>
              <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Send className="h-6 w-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={toggleSave}>
            <Bookmark className={`h-6 w-6 ${saved ? "fill-black" : ""}`} />
            <span className="sr-only">Save</span>
          </Button>
        </div>

        <div className="mt-2">
          <p className="font-medium text-sm">{post.likes.toLocaleString()} likes</p>
          <div className="mt-1">
            <span className="font-medium text-sm">{post.username}</span> <span className="text-sm">{post.caption}</span>
          </div>

          {post.comments.length > 0 && (
            <div className="mt-1">
              {!showAllComments && post.comments.length > 1 && (
                <button className="text-gray-500 text-sm" onClick={() => setShowAllComments(true)}>
                  View all {post.comments.length} comments
                </button>
              )}

              {(showAllComments ? post.comments : post.comments.slice(0, 1)).map((comment, index) => (
                <div key={index} className="mt-1">
                  <span className="font-medium text-sm">{comment.username}</span>{" "}
                  <span className="text-sm">{comment.text}</span>
                </div>
              ))}
            </div>
          )}

          <p className="text-gray-500 text-xs mt-1">{post.timeAgo}</p>
        </div>
      </div>
    </div>
  )
}
