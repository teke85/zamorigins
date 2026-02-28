export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container py-12 md:py-20 min-h-[calc(100vh-10rem)]">
            <div className="max-w-3xl mx-auto bg-card border rounded-2xl shadow-sm p-8 md:p-12 mb-10">
                {children}
            </div>
        </div>
    );
}
