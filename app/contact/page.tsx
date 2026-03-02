import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-[#FCFAF8] min-h-screen text-secondary">
            {/* Hero Section - Refined Editorial */}
            <section className="relative pt-40 pb-24 border-b border-secondary/5 overflow-hidden">
                <div className="container relative z-10 text-center space-y-6">
                    <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Get in Touch</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">Connect With Us</h1>
                    <p className="text-secondary/50 max-w-xl mx-auto text-lg leading-relaxed font-light">
                        Our team is dedicated to bringing the authentic soul of Zambia to your kitchen. We are here to assist with any enquiries.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Info & Story */}
                        <div className="space-y-16 animate-in fade-in slide-in-from-left-8 duration-1000">
                            <div className="space-y-6 text-left">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">We're Here to Assist <br /> Your Journey Home</h2>
                                <p className="text-secondary/60 leading-relaxed text-lg font-light">
                                    Whether you have a question about our heritage harvests, need assistance with a global delivery, or simply wish to share a story of home, our concierge team is at your service.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 border border-[#D99C3B]/20 rounded-full flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-[#D99C3B]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Enquiries</h4>
                                        <p className="text-secondary/60 text-sm font-medium">hello@zamorigins.com</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-10 h-10 border border-[#D99C3B]/20 rounded-full flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-[#D99C3B]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Our Presence</h4>
                                        <p className="text-secondary/60 text-sm font-medium leading-relaxed">London, UK & <br /> Lusaka, Zambia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-xl border border-secondary/5 group">
                                <Image
                                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439489/hero%20image.png"
                                    alt="ZamOrigins Experience"
                                    fill
                                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-all duration-700" />
                            </div>
                        </div>

                        {/* Contact Form - Luxury Card */}
                        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-secondary/5 animate-in fade-in slide-in-from-right-8 duration-1000">
                            <form className="space-y-10">
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Full Name</label>
                                            <input type="text" placeholder="Your name" className="w-full bg-[#FCFAF8] border border-secondary/5 rounded-full px-8 h-14 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20 transition-all" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Email Address</label>
                                            <input type="email" placeholder="email@address.com" className="w-full bg-[#FCFAF8] border border-secondary/5 rounded-full px-8 h-14 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Subject</label>
                                        <input type="text" placeholder="Nature of enquiry" className="w-full bg-[#FCFAF8] border border-secondary/5 rounded-full px-8 h-14 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20 transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Message</label>
                                        <textarea rows={5} placeholder="How can we assist you today?" className="w-full bg-[#FCFAF8] border border-secondary/5 rounded-[24px] px-8 py-6 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none transition-all resize-none text-secondary placeholder:text-secondary/20"></textarea>
                                    </div>
                                </div>
                                <Button className="w-full h-16 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl bg-secondary hover:bg-secondary/90 text-white border-none transition-all group">
                                    Send Enquiry <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
