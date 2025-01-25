import { useState } from 'react'

export default function Home() {
  const [bookmarks, setBookmarks] = useState([])
  const [newBookmark, setNewBookmark] = useState({ title: '', url: '' })

  const addBookmark = () => {
    if (newBookmark.title && newBookmark.url) {
      setBookmarks([...bookmarks, newBookmark])
      setNewBookmark({ title: '', url: '' })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Bookshot.AI</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Bookmark Title"
            value={newBookmark.title}
            onChange={(e) => setNewBookmark({...newBookmark, title: e.target.value})}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="url"
            placeholder="Bookmark URL"
            value={newBookmark.url}
            onChange={(e) => setNewBookmark({...newBookmark, url: e.target.value})}
            className="mb-2 p-2 border rounded w-full"
          />
          <button onClick={addBookmark} className="bg-blue-500 text-white p-2 rounded">Add Bookmark</button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Your Bookmarks</h2>
          {bookmarks.map((bookmark, index) => (
            <div key={index} className="mb-2">
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {bookmark.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
