import localFont from 'next/font/local'

export const instagramSans = localFont({
  src: [
    {
      path: '../public/fonts/InstagramSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstagramSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstagramSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstagramSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instagram-sans',
  display: 'swap',
})

export const instagramSansCondensed = localFont({
  src: [
    {
      path: '../public/fonts/InstagramSansCondensed-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstagramSansCondensed-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instagram-sans-condensed',
  display: 'swap',
})

export const instagramSansScript = localFont({
  src: [
    {
      path: '../public/fonts/InstagramSansScript-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstagramSansScript-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instagram-sans-script',
  display: 'swap',
})

export const instagramSansHeadline = localFont({
  src: '../public/fonts/InstagramSansHeadline-Regular.woff2',
  variable: '--font-instagram-sans-headline',
  display: 'swap',
})

export const instrumentSerif = localFont({
  src: [
    {
      path: '../public/fonts/InstrumentSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstrumentSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
}) 