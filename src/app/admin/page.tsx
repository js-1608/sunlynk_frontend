"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sun,
  LogOut,
  Users,
  FileText,
  FileSpreadsheet,
  Plus,
  Trash2,
  MessageSquare,
  Tag,
  CheckCircle,
  XCircle,
  Clock,
  Briefcase,
  Layers,
  MapPin,
  Calendar,
  Loader2,
} from "lucide-react";

interface Comment {
  _id?: string;
  text: string;
  author: string;
  createdAt: string;
}

interface Lead {
  _id: string;
  type: "residential" | "society" | "commercial";
  fullName: string;
  whatsappNumber: string;
  pinCode: string;
  monthlyBill: string;
  societyName?: string;
  agmStatus?: string;
  designation?: string;
  companyName?: string;
  city?: string;
  status: "New" | "Interested" | "Not Interested" | "Contacted" | "Closed";
  comments: Comment[];
  tags: string[];
  createdAt: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "bde" | "content_editor";
  createdAt: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminDashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState("");
  const [activeTab, setActiveTab] = useState<"leads" | "blogs" | "users">("leads");

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState("");

  // Data states
  const [leads, setLeads] = useState<Lead[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Selection & Forms
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newComment, setNewComment] = useState("");
  const [newTag, setNewTag] = useState("");

  // Lead filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // User Form
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "bde" as "admin" | "bde" | "content_editor",
  });

  // Blog Form
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Technology",
    image: "/assets/images/blog_bifacial_panels.webp",
    author: "",
  });

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("userRole");
    const savedName = localStorage.getItem("userName");

    if (!savedToken) {
      router.push("/login");
      return;
    }

    setToken(savedToken);
    setRole(savedRole);
    setUserName(savedName || "User");

    // Set default tab based on role
    if (savedRole === "content_editor") {
      setActiveTab("blogs");
    } else {
      setActiveTab("leads");
    }

    fetchData(savedToken, savedRole);
  }, [router]);

  const fetchData = async (authToken: string, userRole: string | null) => {
    setLoading(true);
    setError("");
    try {
      const headers = { Authorization: `Bearer ${authToken}` };

      if (userRole === "admin") {
        // Fetch everything
        const [leadsRes, blogsRes, usersRes] = await Promise.all([
          fetch(`${API_URL}/api/leads`, { headers }),
          fetch(`${API_URL}/api/blogs`),
          fetch(`${API_URL}/api/auth/users`, { headers }),
        ]);

        if (leadsRes.ok) setLeads(await leadsRes.json());
        if (blogsRes.ok) setBlogs(await blogsRes.json());
        if (usersRes.ok) setUsers(await usersRes.json());
      } else if (userRole === "bde") {
        // Fetch only leads
        const leadsRes = await fetch(`${API_URL}/api/leads`, { headers });
        if (leadsRes.ok) setLeads(await leadsRes.json());
      } else if (userRole === "content_editor") {
        // Fetch only blogs
        const blogsRes = await fetch(`${API_URL}/api/blogs`);
        if (blogsRes.ok) setBlogs(await blogsRes.json());
      }
    } catch (err) {
      setError("Failed to connect to the backend server. Please make sure the API is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  // ==================== LEAD ACTIONS ====================

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/leads/${leadId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      const updatedLead = await res.json();
      setLeads(leads.map((l) => (l._id === leadId ? updatedLead : l)));
      if (selectedLead?._id === leadId) setSelectedLead(updatedLead);
    } catch (err) {
      alert("Error updating status");
    } finally {
      setActionLoading(false);
    }
  };

  const addLeadComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedLead) return;

    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/leads/${selectedLead._id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: newComment }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const updatedLead = await res.json();
      setLeads(leads.map((l) => (l._id === selectedLead._id ? updatedLead : l)));
      setSelectedLead(updatedLead);
      setNewComment("");
    } catch (err) {
      alert("Error adding comment");
    } finally {
      setActionLoading(false);
    }
  };

  const addLeadTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTag.trim() || !selectedLead) return;

    setActionLoading(true);
    const updatedTags = [...selectedLead.tags, newTag.trim().toLowerCase()];

    try {
      const res = await fetch(`${API_URL}/api/leads/${selectedLead._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tags: updatedTags }),
      });

      if (!res.ok) throw new Error("Failed to add tag");

      const updatedLead = await res.json();
      setLeads(leads.map((l) => (l._id === selectedLead._id ? updatedLead : l)));
      setSelectedLead(updatedLead);
      setNewTag("");
    } catch (err) {
      alert("Error adding tag");
    } finally {
      setActionLoading(false);
    }
  };

  const removeLeadTag = async (tagToRemove: string) => {
    if (!selectedLead) return;

    setActionLoading(true);
    const updatedTags = selectedLead.tags.filter((t) => t !== tagToRemove);

    try {
      const res = await fetch(`${API_URL}/api/leads/${selectedLead._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tags: updatedTags }),
      });

      if (!res.ok) throw new Error("Failed to remove tag");

      const updatedLead = await res.json();
      setLeads(leads.map((l) => (l._id === selectedLead._id ? updatedLead : l)));
      setSelectedLead(updatedLead);
    } catch (err) {
      alert("Error removing tag");
    } finally {
      setActionLoading(false);
    }
  };

  const deleteLeadRecord = async (leadId: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead?")) return;

    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/leads/${leadId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete lead");

      setLeads(leads.filter((l) => l._id !== leadId));
      if (selectedLead?._id === leadId) setSelectedLead(null);
    } catch (err) {
      alert("Error deleting lead");
    } finally {
      setActionLoading(false);
    }
  };

  // ==================== USER ACTIONS ====================

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create user");

      setUsers([...users, data]);
      setNewUser({ name: "", email: "", password: "", role: "bde" });
      alert("Staff user account created successfully!");
    } catch (err: any) {
      alert(err.message || "Error creating user");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this staff account?")) return;

    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete user");

      setUsers(users.filter((u) => u._id !== userId));
    } catch (err) {
      alert("Error deleting user");
    } finally {
      setActionLoading(false);
    }
  };

  // ==================== BLOG ACTIONS ====================

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    const slug = blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const payload = {
      ...blogForm,
      slug,
      author: blogForm.author || userName,
    };

    try {
      const url = editingBlogId
        ? `${API_URL}/api/blogs/${editingBlogId}`
        : `${API_URL}/api/blogs`;

      const method = editingBlogId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save blog post");

      const savedBlog = await res.json();

      if (editingBlogId) {
        setBlogs(blogs.map((b) => (b._id === editingBlogId ? savedBlog : b)));
        setEditingBlogId(null);
        alert("Blog article updated successfully!");
      } else {
        setBlogs([savedBlog, ...blogs]);
        alert("Blog article published successfully!");
      }

      setBlogForm({
        title: "",
        excerpt: "",
        content: "",
        category: "Technology",
        image: "/assets/images/blog_bifacial_panels.webp",
        author: "",
      });
    } catch (err) {
      alert("Error saving blog");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlogId(blog._id);
    setBlogForm({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      image: blog.image,
      author: blog.author,
    });
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    setActionLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/blogs/${blogId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete blog");

      setBlogs(blogs.filter((b) => b._id !== blogId));
    } catch (err) {
      alert("Error deleting blog");
    } finally {
      setActionLoading(false);
    }
  };

  // Filter leads dynamically
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesType = typeFilter === "all" || lead.type === typeFilter;
    return matchesStatus && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sm:px-8 flex justify-between items-center z-10 shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <Sun className="w-5.5 h-5.5 animate-spin-slow" />
          </div>
          <div>
            <span className="text-base font-black tracking-wider block text-slate-900">SunLynk Solar</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Console</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <span className="text-xs font-bold text-slate-700 block">{userName}</span>
            <span className="text-[9px] font-black uppercase text-primary tracking-widest">{role} panel</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-red-55 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-200 py-2 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-60 bg-white border-r border-slate-200 flex flex-row md:flex-col py-2 md:py-6 px-4 md:px-3 gap-2 shrink-0 md:justify-start justify-center">
          {role !== "content_editor" && (
            <button
              onClick={() => setActiveTab("leads")}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "leads"
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <FileSpreadsheet size={16} />
              <span>Leads Management</span>
            </button>
          )}

          {(role === "admin" || role === "content_editor") && (
            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <FileText size={16} />
              <span>Blog Articles</span>
            </button>
          )}

          {role === "admin" && (
            <button
              onClick={() => setActiveTab("users")}
              className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-2.5 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "users"
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Users size={16} />
              <span>Staff Accounts</span>
            </button>
          )}
        </aside>

        {/* Dashboard Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-start">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 text-sm py-4 px-5 rounded-2xl">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="text-sm text-slate-500 font-semibold">Loading console data...</span>
            </div>
          ) : (
            <>
              {/* ==================== LEADS MANAGEMENT TAB ==================== */}
              {activeTab === "leads" && role !== "content_editor" && (
                <div className="flex-1 flex flex-col gap-6 lg:grid lg:grid-cols-12 items-start">
                  {/* Leads List (Col 7 / 8) */}
                  <div className={`${selectedLead ? "lg:col-span-7" : "lg:col-span-12"} w-full flex flex-col gap-5`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 text-left">Leads Captured</h2>
                        <p className="text-xs text-slate-500 text-left">Real-time submissions from contact form</p>
                      </div>

                      {/* Filters */}
                      <div className="flex flex-wrap gap-2">
                        <select
                          value={typeFilter}
                          onChange={(e) => setTypeFilter(e.target.value)}
                          className="bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-xs font-bold text-slate-700 focus:outline-none focus:border-primary"
                        >
                          <option value="all">All Types</option>
                          <option value="residential">Residential</option>
                          <option value="society">Housing Society</option>
                          <option value="commercial">Commercial</option>
                        </select>

                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-xs font-bold text-slate-700 focus:outline-none focus:border-primary"
                        >
                          <option value="all">All Statuses</option>
                          <option value="New">New</option>
                          <option value="Interested">Interested</option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>

                    {/* Table Box */}
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                            <tr>
                              <th className="py-4 px-5">Lead Name</th>
                              <th className="py-4 px-4">Contact</th>
                              <th className="py-4 px-4">Type</th>
                              <th className="py-4 px-4">Status</th>
                              <th className="py-4 px-5 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {filteredLeads.length === 0 ? (
                              <tr>
                                <td colSpan={5} className="py-8 text-center text-slate-450 font-medium">
                                  No leads found matching filters.
                                </td>
                              </tr>
                            ) : (
                              filteredLeads.map((lead) => (
                                <tr
                                  key={lead._id}
                                  onClick={() => setSelectedLead(lead)}
                                  className={`hover:bg-slate-50/50 transition-colors cursor-pointer ${
                                    selectedLead?._id === lead._id ? "bg-slate-55 bg-slate-50" : ""
                                  }`}
                                >
                                  <td className="py-4 px-5 font-bold text-slate-900 text-left">
                                    {lead.fullName}
                                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">
                                      PIN: {lead.pinCode}
                                    </span>
                                  </td>
                                  <td className="py-4 px-4 font-semibold text-slate-650 text-left">
                                    {lead.whatsappNumber}
                                  </td>
                                  <td className="py-4 px-4 text-left">
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${
                                        lead.type === "residential"
                                          ? "bg-blue-50 text-blue-700 border border-blue-200/50"
                                          : lead.type === "society"
                                          ? "bg-purple-50 text-purple-700 border border-purple-200/50"
                                          : "bg-orange-50 text-orange-700 border border-orange-200/50"
                                      }`}
                                    >
                                      {lead.type}
                                    </span>
                                  </td>
                                  <td className="py-4 px-4 text-left">
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${
                                        lead.status === "New"
                                          ? "bg-sky-50 text-sky-700 border border-sky-200"
                                          : lead.status === "Interested"
                                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                          : lead.status === "Not Interested"
                                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                                          : lead.status === "Contacted"
                                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                                          : "bg-slate-100 text-slate-600 border border-slate-200"
                                      }`}
                                    >
                                      {lead.status}
                                    </span>
                                  </td>
                                  <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex gap-2 justify-end">
                                      <button
                                        onClick={() => setSelectedLead(lead)}
                                        className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold py-1 px-2.5 rounded transition-all cursor-pointer"
                                      >
                                        View
                                      </button>
                                      {role === "admin" && (
                                        <button
                                          onClick={() => deleteLeadRecord(lead._id)}
                                          className="text-red-650 hover:text-red-700 text-red-600 p-1 rounded hover:bg-red-50 transition-all cursor-pointer"
                                        >
                                          <Trash2 size={14} />
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Lead Details Drawer / Col 5 */}
                  {selectedLead && (
                    <div className="lg:col-span-5 w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col gap-6 text-left relative animate-in fade-in slide-in-from-right-4 duration-300">
                      {/* Close button */}
                      <button
                        onClick={() => setSelectedLead(null)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-655 hover:text-slate-600 transition-colors cursor-pointer"
                      >
                        <XCircle size={20} />
                      </button>

                      {/* Header details */}
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-primary">
                          Lead Details
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900 mt-1">{selectedLead.fullName}</h3>
                        <p className="text-xs text-slate-505 text-slate-500 mt-0.5">Submitted: {new Date(selectedLead.createdAt).toLocaleString()}</p>
                      </div>

                      {/* Status controllers */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-slate-505 text-slate-500 uppercase tracking-wider block">
                          Update Lead Status
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => updateLeadStatus(selectedLead._id, "Interested")}
                            disabled={actionLoading}
                            className={`flex items-center gap-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedLead.status === "Interested"
                                ? "bg-emerald-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <CheckCircle size={12} />
                            Interested
                          </button>
                          <button
                            onClick={() => updateLeadStatus(selectedLead._id, "Not Interested")}
                            disabled={actionLoading}
                            className={`flex items-center gap-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedLead.status === "Not Interested"
                                ? "bg-rose-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <XCircle size={12} />
                            Not Interested
                          </button>
                          <button
                            onClick={() => updateLeadStatus(selectedLead._id, "Contacted")}
                            disabled={actionLoading}
                            className={`flex items-center gap-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedLead.status === "Contacted"
                                ? "bg-amber-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <Clock size={12} />
                            Contacted
                          </button>
                        </div>
                      </div>

                      {/* Technical Fields Details */}
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">WhatsApp</span>
                          <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.whatsappNumber}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">Monthly Bill</span>
                          <span className="font-semibold text-primary mt-1 block">{selectedLead.monthlyBill}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">PIN Code</span>
                          <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.pinCode}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-[10px] text-slate-505 text-slate-500 font-bold block uppercase tracking-wide">Form Type</span>
                          <span className="font-semibold text-purple-650 text-purple-600 mt-1 block uppercase tracking-wider">{selectedLead.type}</span>
                        </div>

                        {/* Society details */}
                        {selectedLead.type === "society" && (
                          <>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
                              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">Society Name</span>
                              <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.societyName}</span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">AGM Approval Status</span>
                              <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.agmStatus}</span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">Designation</span>
                              <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.designation}</span>
                            </div>
                          </>
                        )}

                        {/* Commercial details */}
                        {selectedLead.type === "commercial" && (
                          <>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
                              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">Company Name</span>
                              <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.companyName}</span>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
                              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wide">City</span>
                              <span className="font-semibold text-slate-800 mt-1 block">{selectedLead.city}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Tagging management */}
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          Tags / Labels
                        </span>
                        {/* Display existing tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {selectedLead.tags.length === 0 ? (
                            <span className="text-xs text-slate-400 italic">No tags associated.</span>
                          ) : (
                            selectedLead.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-slate-100 text-slate-700 text-[10px] font-bold py-1 pl-2.5 pr-1.5 rounded-full border border-slate-200 flex items-center gap-1 capitalize"
                              >
                                {tag}
                                <button
                                  type="button"
                                  onClick={() => removeLeadTag(tag)}
                                  className="text-slate-400 hover:text-red-650 p-0.5 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                                >
                                  <XCircle size={10} />
                                </button>
                              </span>
                            ))
                          )}
                        </div>

                        {/* Tag entry form */}
                        <form onSubmit={addLeadTag} className="flex gap-2 mt-1">
                          <input
                            type="text"
                            placeholder="Add new tag..."
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            className="bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-primary flex-1 outline-none text-slate-800"
                          />
                          <button
                            type="submit"
                            disabled={actionLoading || !newTag.trim()}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold p-2.5 rounded-lg text-xs transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </form>
                      </div>

                      {/* Comment threads section */}
                      <div className="border-t border-slate-200 pt-5 flex flex-col gap-4 flex-1 overflow-hidden min-h-[220px]">
                        <h4 className="text-xs font-bold text-slate-505 text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                          <MessageSquare size={14} className="text-primary" />
                          Comment History
                        </h4>

                        {/* Comments box scroll container */}
                        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 max-h-[220px]">
                          {selectedLead.comments.length === 0 ? (
                            <p className="text-xs text-slate-405 text-slate-400 italic py-2 text-center">No comments added yet.</p>
                          ) : (
                            selectedLead.comments.map((comment, index) => (
                              <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-150/75">
                                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold mb-1">
                                  <span>{comment.author}</span>
                                  <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                                </div>
                                <p className="text-xs text-slate-700 leading-normal font-medium">{comment.text}</p>
                              </div>
                            ))
                          )}
                        </div>

                        {/* Add comment entry form */}
                        <form onSubmit={addLeadComment} className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Add action note or status comment..."
                            required
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="bg-slate-55 bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-primary flex-1 outline-none text-slate-800"
                          />
                          <button
                            type="submit"
                            disabled={actionLoading || !newComment.trim()}
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                          >
                            Add
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ==================== BLOGS MANAGEMENT TAB ==================== */}
              {activeTab === "blogs" && (role === "admin" || role === "content_editor") && (
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Blog Form (Col 4) */}
                  <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-left">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">
                      {editingBlogId ? "Edit Blog Article" : "Publish New Article"}
                    </h3>

                    <form onSubmit={handleBlogSubmit} className="flex flex-col gap-4 text-xs">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Article Title</label>
                        <input
                          type="text"
                          required
                          value={blogForm.title}
                          onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                          placeholder="e.g. Understanding Bifacial Solar Tech"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Excerpt / Summary</label>
                        <input
                          type="text"
                          required
                          value={blogForm.excerpt}
                          onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                          placeholder="Brief 1-2 sentence description for listing card"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Category</label>
                          <select
                            value={blogForm.category}
                            onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                            className="bg-white border border-slate-200 rounded-xl py-3 px-3 text-slate-800 focus:outline-none focus:border-primary"
                          >
                            <option value="Technology">Technology</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Solutions">Solutions</option>
                            <option value="Subsidies">Subsidies</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Author Override</label>
                          <input
                            type="text"
                            value={blogForm.author}
                            onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                            placeholder="Defaults to your name"
                            className="bg-white border border-slate-200 rounded-xl py-3 px-3 text-slate-800 focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Image URL</label>
                        <input
                          type="text"
                          required
                          value={blogForm.image}
                          onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">HTML Content</label>
                        <textarea
                          rows={10}
                          required
                          value={blogForm.content}
                          onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                          placeholder="<p>Write your detailed blog post here. Standard HTML tags are supported.</p>"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary font-mono text-xs"
                        ></textarea>
                      </div>

                      <div className="flex gap-2 mt-2">
                        <button
                          type="submit"
                          disabled={actionLoading}
                          className="bg-primary hover:bg-primary-hover text-white font-extrabold py-3 px-6 rounded-xl shadow-lg transition-all flex-1 text-center cursor-pointer"
                        >
                          {editingBlogId ? "Update Article" : "Publish Article"}
                        </button>
                        {editingBlogId && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingBlogId(null);
                              setBlogForm({
                                title: "",
                                excerpt: "",
                                content: "",
                                category: "Technology",
                                image: "/assets/images/blog_bifacial_panels.webp",
                                author: "",
                              });
                            }}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold py-3 px-4 rounded-xl transition-all cursor-pointer"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Blog Articles List (Col 8) */}
                  <div className="lg:col-span-8 w-full flex flex-col gap-5 text-left">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Published Articles</h2>
                      <p className="text-xs text-slate-500">Manage blog content displayed on the frontend</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {blogs.length === 0 ? (
                        <div className="col-span-2 text-center py-12 bg-white border border-slate-200 rounded-2xl text-slate-400 font-semibold">
                          No blog posts found in the database.
                        </div>
                      ) : (
                        blogs.map((blog) => (
                          <div
                            key={blog._id}
                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
                          >
                            <div>
                              {/* Fake preview header */}
                              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                                {/* Fallback image representation */}
                                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs uppercase">
                                  [ Blog Image ]
                                </div>
                                <img
                                  src={blog.image}
                                  alt={blog.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = "none";
                                  }}
                                />
                                <div className="absolute top-3 left-3 bg-primary text-white text-[9px] uppercase font-bold py-0.5 px-2 rounded-md">
                                  {blog.category}
                                </div>
                              </div>

                              <div className="p-5">
                                <span className="text-[10px] text-slate-500 font-bold block mb-1">
                                  {blog.date} • by {blog.author}
                                </span>
                                <h4 className="font-extrabold text-slate-900 text-base leading-snug mb-2 line-clamp-2">
                                  {blog.title}
                                </h4>
                                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                                  {blog.excerpt}
                                </p>
                              </div>
                            </div>

                            <div className="p-5 pt-0 border-t border-slate-100 flex justify-between items-center">
                              <span className="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">
                                /{blog.slug}
                              </span>

                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleEditBlog(blog)}
                                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-1 px-3 rounded text-[11px] transition-colors cursor-pointer border border-slate-200/50"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteBlog(blog._id)}
                                  className="text-red-650 hover:text-red-700 text-red-650 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-all cursor-pointer"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== STAFF ACCOUNTS MANAGEMENT TAB ==================== */}
              {activeTab === "users" && role === "admin" && (
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Create Staff Account Form (Col 4) */}
                  <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-left">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Create Staff Account</h3>

                    <form onSubmit={handleCreateUser} className="flex flex-col gap-4 text-xs">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-505 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Staff Name</label>
                        <input
                          type="text"
                          required
                          value={newUser.name}
                          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                          placeholder="Enter full name"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-550 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Email Address</label>
                        <input
                          type="email"
                          required
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                          placeholder="e.g. bde@sunlynk.com"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-550 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Secure Password</label>
                        <input
                          type="password"
                          required
                          value={newUser.password}
                          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                          placeholder="Enter password"
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-slate-550 text-slate-500 font-bold uppercase tracking-wider text-[10px]">Console Role</label>
                        <select
                          value={newUser.role}
                          onChange={(e) =>
                            setNewUser({
                              ...newUser,
                              role: e.target.value as "admin" | "bde" | "content_editor",
                            })
                          }
                          className="bg-white border border-slate-200 rounded-xl py-3 px-3 text-slate-800 focus:outline-none focus:border-primary"
                        >
                          <option value="bde">BDE (Leads only)</option>
                          <option value="content_editor">Content Editor (Blogs only)</option>
                          <option value="admin">Administrator (Full Access)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={actionLoading}
                        className="bg-primary hover:bg-primary-hover text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all text-center mt-2 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </form>
                  </div>

                  {/* Staff List Table (Col 8) */}
                  <div className="lg:col-span-8 w-full flex flex-col gap-5 text-left">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Staff User Accounts</h2>
                      <p className="text-xs text-slate-500">Verify user credentials and roles</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                            <tr>
                              <th className="py-4 px-5">Staff Member</th>
                              <th className="py-4 px-4">Email</th>
                              <th className="py-4 px-4">Console Role</th>
                              <th className="py-4 px-5 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {users.length === 0 ? (
                              <tr>
                                <td colSpan={4} className="py-8 text-center text-slate-450 font-semibold">
                                  No accounts found.
                                </td>
                              </tr>
                            ) : (
                              users.map((u) => (
                                <tr key={u._id} className="hover:bg-slate-50/50 transition-colors">
                                  <td className="py-4 px-5 font-bold text-slate-900 text-left">{u.name}</td>
                                  <td className="py-4 px-4 text-slate-650 text-left">{u.email}</td>
                                  <td className="py-4 px-4 text-left">
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${
                                        u.role === "admin"
                                          ? "bg-red-50 text-red-700 border border-red-200/50"
                                          : u.role === "bde"
                                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                                          : "bg-blue-50 text-blue-700 border border-blue-200/50"
                                      }`}
                                    >
                                      {u.role === "content_editor" ? "editor" : u.role}
                                    </span>
                                  </td>
                                  <td className="py-4 px-5 text-right">
                                    <button
                                      onClick={() => handleDeleteUser(u._id)}
                                      disabled={u.email === "admin@sunlynk.com"}
                                      className="text-red-650 hover:text-red-700 p-1.5 rounded hover:bg-red-50 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
