import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sri Gnanodaya Schools',
        short_name: 'Sri Gnanodaya',
        description: 'Excellence Redefined - Best School in Kanuru, Vijayawada',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
