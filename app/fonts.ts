// app/font.ts
import localFont from 'next/font/local'

export const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gotham-XLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-XLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gotham-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gotham',
  display: 'swap',
})
