"use client"

import { useQuery } from "@tanstack/react-query"
import { blogApi } from "../lib/api"
import { Badge } from "./ui/badge"
import { Skeleton } from "./ui/skeleton"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"

interface BlogDetailProps {
    blogId?: number
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const {
        data: blog,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["blog", blogId],
        queryFn: () => blogApi.getBlogById(blogId!),
        enabled: !!blogId,
    })

    if (!blogId) {
        return (
            <div className="h-96 flex items-center justify-center text-muted-foreground rounded-lg border border-dashed border-border">
                Select a blog to read
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="space-y-6 animate-fade-in">
                <Skeleton className="h-72 md:h-80 w-full rounded-xl" />
                <Skeleton className="h-10 w-3/4 rounded-lg" />
                <Skeleton className="h-5 w-1/2 rounded-lg" />
                <Skeleton className="h-32 w-full rounded-lg" />
            </div>
        )
    }

    if (error || !blog) {
        return <div className="text-destructive text-sm p-4">Error loading blog details</div>
    }

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikes(isLiked ? likes - 1 : likes + 1)
    }

    return (
        <article className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                    src={blog.coverImage || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
            </div>

            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                    {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted-foreground">
                    <div className="flex flex-wrap gap-2">
                        {blog.category.map((cat) => (
                            <Badge
                                key={cat}
                                variant="outline"
                                className="px-3 py-1 text-xs md:text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/40 text-primary hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-200"
                            >
                                {cat}
                            </Badge>
                        ))}
                    </div>
                    <span className="hidden sm:inline text-muted-foreground/40">•</span>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground">
                        {new Date(blog.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed italic">{blog.description}</p>

            <div className="prose prose-sm md:prose-base prose-invert max-w-none">
                <div className="space-y-4 md:space-y-6">
                    <p className="whitespace-pre-wrap text-base md:text-lg leading-relaxed md:leading-loose text-foreground/95 font-light">
                        {blog.content}
                    </p>
                </div>
            </div>

            <div className="border-t border-border pt-6 md:pt-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        <span>{Math.ceil(blog.content.split(/\s+/).length / 200)} min read</span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Article</span>
                </div>

                <div className="flex items-center gap-4 md:gap-8 pt-4 border-t border-border/50">
                    <button
                        onClick={handleLike}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ease-out group hover:bg-primary/10"
                    >
                        <Heart
                            size={20}
                            className={`transition-all duration-300 ease-out group-hover:scale-110 ${isLiked
                                    ? "fill-primary stroke-primary text-primary"
                                    : "stroke-muted-foreground text-muted-foreground group-hover:stroke-primary"
                                }`}
                        />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {likes > 0 ? likes : "Like"}
                        </span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ease-out group hover:bg-accent/10">
                        <MessageCircle
                            size={20}
                            className="stroke-muted-foreground text-muted-foreground group-hover:stroke-accent transition-all duration-300 ease-out group-hover:scale-110"
                        />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
                            Comment
                        </span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ease-out group hover:bg-secondary/50">
                        <Share2
                            size={20}
                            className="stroke-muted-foreground text-muted-foreground group-hover:stroke-foreground transition-all duration-300 ease-out group-hover:scale-110"
                        />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            Share
                        </span>
                    </button>
                </div>
            </div>
        </article>
    )
}
