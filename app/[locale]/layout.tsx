import '@/app/globals.css';
import { I18nLocale, i18nConfig } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lauri Ahlfors',
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: I18nLocale) => ({ locale: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: I18nLocale;
  };
};

export default async function RootLayout({ children, params }: Props) {
  // Get translation obejct.
  const translation = await getTranslation(params.locale);

  return (
    <html lang={params.locale}>
      <body className={GeistSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
