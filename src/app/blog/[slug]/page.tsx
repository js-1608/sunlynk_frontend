import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogsData from "@/data/blogs.json";
import { User, MessageSquare, Calendar, ChevronRight, Hash } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Sidebar posts (fallback/recent)
  const recentPosts = blogsData.slice(0, 3);

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">News Details</span>
          <h1 className="text-3xl md:text-5xl font-black">{post.title}</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Main Details content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Post content (col-span-8) */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            {/* Image */}
            <div className="relative w-full aspect-[16/9] bg-gray-1000 rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-md flex flex-col items-center shadow-md">
                <span className="text-sm font-extrabold">{post.day}</span>
                <span className="text-[10px] uppercase">{post.month}</span>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 text-xs text-gray-400 mt-2">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                <span>by {post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare size={14} className="text-primary" />
                <span>{post.commentsCount} Comments</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                <span>{post.date}</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mt-2 leading-tight">
              {post.title}
            </h2>

            {/* HTML Body */}
            <div
              className="text-sm md:text-base text-gray-700 leading-relaxed text-justify flex flex-col gap-4 mt-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Tags and Categories */}
            <div className="border-t border-b border-gray-100 py-6 my-6 flex flex-wrap gap-6 justify-between items-center text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-800 uppercase tracking-wider">Categories:</span>
                {post.categories.map((c, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md">{c}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-800 uppercase tracking-wider">Tags:</span>
                {post.tags.map((t, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-md font-semibold flex items-center gap-0.5">
                    <Hash size={10} />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-8 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Comments (02)</h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start p-5 bg-gray-1000 border border-gray-100 rounded-xl">
                  <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <Image src="/assets/images/blog/blog-comment-1-1.webp" alt="User comment avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">Layerdrops</h5>
                    <span className="text-[10px] text-gray-400">March 20, 2024 at 2:37 PM</span>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed text-justify">
                      Neque porro est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-gray-1000 border border-gray-100 rounded-xl">
                  <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <Image src="/assets/images/blog/blog-comment-1-2.webp" alt="User comment avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">SolarExpert</h5>
                    <span className="text-[10px] text-gray-400">March 21, 2024 at 10:15 AM</span>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed text-justify">
                      Great breakdown of the technical points regarding temperature coefficients and inverter clipping parameters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Recent Posts widget */}
            <div className="bg-gray-1000 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-800 text-base mb-4 border-b border-gray-200 pb-2">Recent Posts</h4>
              <ul className="flex flex-col gap-4">
                {recentPosts.map((rp) => (
                  <li key={rp.id} className="flex gap-3 items-center group">
                    <div className="relative w-16 h-12 bg-gray-100 rounded-md overflow-hidden shrink-0">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">{rp.date}</span>
                      <Link
                        href={`/blog/${rp.slug}`}
                        className="text-xs font-bold text-gray-700 hover:text-primary transition-colors line-clamp-2 mt-0.5"
                      >
                        {rp.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories list */}
            <div className="bg-gray-1000 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-800 text-base mb-4 border-b border-gray-200 pb-2">Categories</h4>
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between items-center text-xs font-bold text-gray-600">
                  <span className="hover:text-primary cursor-pointer flex items-center gap-1">
                    <ChevronRight size={12} />
                    <span>Solar Modules</span>
                  </span>
                  <span>(4)</span>
                </li>
                <li className="flex justify-between items-center text-xs font-bold text-gray-600">
                  <span className="hover:text-primary cursor-pointer flex items-center gap-1">
                    <ChevronRight size={12} />
                    <span>Solar Inverters</span>
                  </span>
                  <span>(2)</span>
                </li>
                <li className="flex justify-between items-center text-xs font-bold text-gray-600">
                  <span className="hover:text-primary cursor-pointer flex items-center gap-1">
                    <ChevronRight size={12} />
                    <span>Weather Sensors</span>
                  </span>
                  <span>(3)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
