'use client';
import { Loader } from '@/shared/components';
import './styles/global.css';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={manrope.className}>
      <body style={{overflow: loading ? 'hidden' : 'auto'}}>
        <Script
          strategy="afterInteractive"
          src="https://mc.yandex.ru/metrika/tag.js"
        />
        <Script id="yandex-metrika-init" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(103332335, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        {/* NoScript Fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103332335"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {loading && <Loader />}
        {children}
        {/* {loading ? <Loader /> : children} */}
      </body>
    </html>
  );
}
