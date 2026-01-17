"use client"

import type React from "react"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { blogApi } from "../lib/api"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export default function CreateBlogForm() {
    const queryClient = useQueryClient()
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        content: "",
        coverImage: "",
    })

    const mutation = useMutation({
        mutationFn: blogApi.createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] })
            setIsOpen(false)
            setFormData({
                title: "",
                category: "",
                description: "",
                content: "",
                coverImage: "",
            })
        },
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate({
            title: formData.title,
            category: formData.category.split(",").map((c) => c.trim()),
            description: formData.description,
            content: formData.content,
            coverImage: formData.coverImage,
            date: new Date().toISOString(),
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="font-serif">Create Blog Post</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Title</label>
                        <Input
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Blog title"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Categories (comma-separated)</label>
                        <Input
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            placeholder="e.g., FINANCE, TECH"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Blog description"
                            rows={2}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Cover Image URL</label>
                        <Input
                            required
                            value={formData.coverImage}
                            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Content</label>
                        <Textarea
                            required
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Blog content"
                            rows={6}
                        />
                    </div>

                    <Button type="submit" disabled={mutation.isPending} className="w-full">
                        {mutation.isPending ? "Creating..." : "Create Blog Post"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
