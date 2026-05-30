import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/data/blogs.json";
import { User, MessageSquare, ArrowRight, Sun } from "lucide-react";

export default function BlogList() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">News & Articles</span>
          <h1 className="text-3xl md:text-5xl font-black">Blog</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post) => (
              <div 
                key={post.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-gray-50 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-350"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-md flex flex-col items-center">
                    <span className="text-sm font-extrabold">{post.day}</span>
                    <span className="text-[10px] uppercase">{post.month}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-primary" />
                        <span>by {post.author}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageSquare size={14} className="text-primary" />
                        <span>{post.commentsCount} Comments</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-dark hover:text-primary transition-colors mt-auto self-start group"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
