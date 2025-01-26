"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categorizeBookmark } from "@/lib/ai-service"

interface Bookmark {
  id: string
  title: string
  url: string
  category: string
}

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [newBookmark, setNewBookmark] = useState({ title: "", url: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState("all")

  const addBookmark = async () => {
    if (newBookmark.title && newBookmark.url) {
      setIsLoading(true)
      try {
        const category = await categorizeBookmark(newBookmark.title, newBookmark.url)
        setBookmarks([...bookmarks, { ...newBookmark, id: Date.now().toString(), category }])
        setNewBookmark({ title: "", url: "" })
      } catch (error) {
        console.error("Error categorizing bookmark:", error)
        // If AI categorization fails, add bookmark with 'Uncategorized' category
        setBookmarks([...bookmarks, { ...newBookmark, id: Date.now().toString(), category: "Uncategorized" }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const categories = ["Work", "Personal", "Learning", "Entertainment", "Uncategorized"]
  const filteredBookmarks = filter === "all" ? bookmarks : bookmarks.filter((b) => b.category === filter)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Bookshot.AI</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Bookmark</CardTitle>
            <CardDescription>Enter the details of your new bookmark</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="text"
              placeholder="Bookmark Title"
              value={newBookmark.title}
              onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
            />
            <Input
              type="url"
              placeholder="Bookmark URL"
              value={newBookmark.url}
              onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={addBookmark} disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Bookmark"}
            </Button>
          </CardFooter>
        </Card>

        <div className="mb-4">
          <Select onValueChange={setFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBookmarks.map((bookmark) => (
            <Card key={bookmark.id}>
              <CardHeader>
                <CardTitle className="text-lg">{bookmark.title}</CardTitle>
                <CardDescription>
                  <Badge>{bookmark.category}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Site
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

