import { Home, Search, PlusSquare, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 flex justify-between items-center max-w-md mx-auto">
      <button className="p-2">
        <Home className="h-6 w-6" />
      </button>
      <button className="p-2">
        <Search className="h-6 w-6" />
      </button>
      <button className="p-2">
        <PlusSquare className="h-6 w-6" />
      </button>
      <button className="p-2">
        <Heart className="h-6 w-6" />
      </button>
      <button className="p-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </button>
    </div>
  )
}
