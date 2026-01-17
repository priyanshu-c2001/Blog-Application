"use client"

import { useQuery } from "@tanstack/react-query"
import { blogApi } from "../lib/api"
import BlogCard from "./blog-card"
import { Skeleton } from "./ui/skeleton"

interface BlogListProps {
    selectedId?: number
    onSelectBlog: (id: number) => void
}

export default function BlogList({ selectedId, onSelectBlog }: BlogListProps) {
    const {
        data: blogs,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["blogs"],
        queryFn: blogApi.getBlogs,
    })

    if (isLoading) {
        return (
            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-28 md:h-32 rounded-lg" />
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-destructive text-sm p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                Error loading blogs. Make sure the JSON Server is running on port 3001.
            </div>
        )
    }

    return (
        <div className="space-y-3 md:space-y-4">
            {blogs?.map((blog, index) => (
                <div key={blog.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in-up">
                    <BlogCard blog={blog} isSelected={blog.id === selectedId} onClick={() => onSelectBlog(blog.id)} />
                </div>
            ))}
        </div>
    )
}
