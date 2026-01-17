"use client"

import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import type { Blog } from "../lib/api"

interface BlogCardProps {
    blog: Blog
    isSelected?: boolean
    onClick?: () => void
}

export default function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
    return (
        <Card
            onClick={onClick}
            className={`cursor-pointer premium-card group transition-all duration-300 ease-out ${isSelected
                    ? "border-primary bg-gradient-to-br from-primary/10 to-accent/5 shadow-md"
                    : "hover:border-primary/30"
                }`}
        >
            <CardContent className="pt-4 md:pt-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                    {blog.category.map((cat) => (
                        <Badge
                            key={cat}
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-gradient-to-r from-primary/15 to-accent/15 text-primary hover:from-primary/25 hover:to-accent/25 border border-primary/20 hover:border-primary/40 transition-all duration-200"
                        >
                            {cat}
                        </Badge>
                    ))}
                </div>
                <h3 className="font-serif font-semibold line-clamp-2 mb-2 text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-200">
                    {blog.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 font-light leading-relaxed">
                    {blog.description}
                </p>
                <p className="text-xs text-muted-foreground mt-3 font-light">{new Date(blog.date).toLocaleDateString()}</p>
            </CardContent>
        </Card>
    )
}
