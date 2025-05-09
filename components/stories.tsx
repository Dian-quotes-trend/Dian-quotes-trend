import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function Stories() {
  const stories = [
    { username: "Your Story", image: "/placeholder.svg?height=64&width=64", isYourStory: true },
    { username: "janedoe", image: "/placeholder.svg?height=64&width=64" },
    { username: "travel_addict", image: "/placeholder.svg?height=64&width=64" },
    { username: "foodie_adventures", image: "/placeholder.svg?height=64&width=64" },
    { username: "fitness_guru", image: "/placeholder.svg?height=64&width=64" },
    { username: "tech_geek", image: "/placeholder.svg?height=64&width=64" },
    { username: "art_lover", image: "/placeholder.svg?height=64&width=64" },
    { username: "music_fan", image: "/placeholder.svg?height=64&width=64" },
  ]

  return (
    <div className="py-4 border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-4">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <div
                className={`p-[2px] rounded-full ${story.isYourStory ? "bg-gray-200" : "bg-gradient-to-tr from-yellow-400 to-pink-600"}`}
              >
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src={story.image || "/placeholder.svg"} alt={story.username} />
                  <AvatarFallback>{story.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs truncate max-w-[64px]">{story.username}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
