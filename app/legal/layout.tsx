export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#FCFAF8] min-h-screen text-secondary">
            <div className="container py-24 md:py-32">
                <div className="max-w-3xl mx-auto bg-white border border-secondary/5 rounded-[40px] shadow-2xl p-12 md:p-20 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 prose prose-secondary prose-sm max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-secondary prose-p:text-secondary/60 prose-p:leading-relaxed prose-strong:text-secondary prose-li:text-secondary/60">
                    {children}
                </div>

                <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/30">
                        ZamOrigins Heritage Legal Compliance Standard
                    </p>
                </div>
            </div>
        </div>
    );
}
