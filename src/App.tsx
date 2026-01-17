"use client"

import { useState, useEffect } from "react"
import BlogList from "./components/blog-list"
import BlogDetail from "./components/blog-detail"
import Navbar from "./components/navbar"
import CreateBlogForm from "./components/create-blog-form"
import Footer from "./components/footer"

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number>(1)

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth")
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="border-b border-border bg-background/95 backdrop-blur-sm shadow-sm animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1 animate-slide-in-left">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                CA Monk Blog
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-2 font-light leading-relaxed">
                Stay updated with the latest trends in finance, accounting, and career growth
              </p>
            </div>
            <div className="pt-2">
              <div className="scale-100 origin-center">
                <CreateBlogForm />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 min-h-[calc(100vh-200px)] lg:h-auto">

          <aside className="lg:col-span-1 animate-slide-in-left">
            <div className="sticky top-24 lg:max-h-[calc(100vh-150px)] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent hover:scrollbar-thumb-accent/50 transition-colors">
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-foreground">Latest Articles</h2>
              <BlogList selectedId={selectedBlogId} onSelectBlog={setSelectedBlogId} />
            </div>
          </aside>

          <section className="lg:col-span-2 animate-fade-in-up">
            <BlogDetail blogId={selectedBlogId} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
