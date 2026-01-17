const API_BASE_URL = "http://localhost:3001"

export interface Blog {
    id: number
    title: string
    category: string[]
    description: string
    date: string
    coverImage: string
    content: string
}

export const blogApi = {
    getBlogs: async (): Promise<Blog[]> => {
        const response = await fetch(`${API_BASE_URL}/blogs`)
        if (!response.ok) throw new Error("Failed to fetch blogs")
        return response.json()
    },

    getBlogById: async (id: number): Promise<Blog> => {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`)
        if (!response.ok) throw new Error("Failed to fetch blog")
        return response.json()
    },

    createBlog: async (blog: Omit<Blog, "id">): Promise<Blog> => {
        const response = await fetch(`${API_BASE_URL}/blogs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        })
        if (!response.ok) throw new Error("Failed to create blog")
        return response.json()
    },
}
