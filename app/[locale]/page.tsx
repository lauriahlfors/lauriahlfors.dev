import { I18nLocale } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';

type Props = {
  params: { locale: I18nLocale };
};

export default async function Page({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section>
      <h1></h1>
    </section>
  );
}
