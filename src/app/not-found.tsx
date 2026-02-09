import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-display text-6xl text-gold mb-4">404</h2>
            <p className="font-heading text-xl text-charcoal mb-8">Page Not Found</p>
            <Link
                href="/"
                className="px-6 py-3 bg-charcoal text-white rounded-full font-heading hover:bg-gold hover:text-charcoal transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}
