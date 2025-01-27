import localFont from 'next/font/local';

const urbanist = localFont({
  src: [
    {
      path: './Urbanist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Urbanist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Urbanist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Urbanist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-urbanist',
});

export default {
  urbanist
};
