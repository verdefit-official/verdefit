import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { MenuProvider } from "@/components/MenuProvider";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";

type SiteSettingsSanity = {
  bookingUrl?: string;
  instagramUrl?: string;
  lineUrl?: string;
  footerDescription?: string;
  copyrightYear?: string;
  logo?: { asset: { _ref: string; _type: string } };
  favicon?: { asset: { _ref: string; _type: string } };
};

type AccessPartialSanity = {
  phone?: string;
  postalCode?: string;
  address?: string;
  hours?: string;
  lastEntry?: string;
  closedDays?: string;
};

type TopPageSeoSanity = {
  pageTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { asset: { _ref: string; _type: string } };
};

const defaultMetadata: Metadata = {
  title: "横手市の整体ならVERDE FIT｜国家資格者が教える腰痛・骨盤矯正のパーソナル",
  description:
    "横手市で整体をお探しの方へ。腰痛や身体の不調にお悩みならVERDE FITへ。厚生労働省認可の国家資格（柔道整復師）を持つ院長が延べ5,000人以上を施術。横手市で痛みの根本改善を目指す整体院です。初回体験受付中。",
  keywords: ["横手市 整体", "横手市 腰痛", "横手市 骨盤矯正", "横手市 パーソナルジム", "横手市 ジム"],
  openGraph: {
    title: "横手市の整体ならVERDE FIT｜国家資格者が教える腰痛・骨盤矯正のパーソナル",
    description:
      "横手市で整体をお探しの方へ。腰痛や身体の不調にお悩みならVERDE FITへ。厚生労働省認可の国家資格（柔道整復師）を持つ院長が延べ5,000人以上を施術。横手市で痛みの根本改善を目指す整体院です。初回体験受付中。",
    locale: "ja_JP",
    type: "website",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const [seo, settings] = await Promise.all([
    safeFetch<TopPageSeoSanity>(
      `*[_type == "topPageSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage }`
    ),
    safeFetch<Pick<SiteSettingsSanity, "favicon">>(
      `*[_type == "siteSettings"][0]{ favicon{ asset{ _ref, _type } } }`
    ),
  ]);

  const faviconUrl = settings?.favicon ? urlForImage(settings.favicon) : undefined;
  const icons = faviconUrl ? { icon: faviconUrl } : undefined;

  if (!seo) return { ...defaultMetadata, ...(icons ? { icons } : {}) };

  const ogImageUrl = seo.ogImage ? urlForImage(seo.ogImage) : undefined;

  return {
    title:
      seo.pageTitle ??
      "横手市の整体ならVERDE FIT｜国家資格者が教える腰痛・骨盤矯正のパーソナル",
    description:
      seo.metaDescription ??
      "横手市で整体をお探しの方へ。腰痛や身体の不調にお悩みならVERDE FITへ。厚生労働省認可の国家資格（柔道整復師）を持つ院長が延べ5,000人以上を施術。横手市で痛みの根本改善を目指す整体院です。初回体験受付中。",
    keywords: seo.keywords ?? ["横手市 整体", "横手市 腰痛", "横手市 骨盤矯正", "横手市 パーソナルジム", "横手市 ジム"],
    icons,
    openGraph: {
      title:
        seo.ogTitle ??
        seo.pageTitle ??
        "横手市の整体ならVERDE FIT｜国家資格者が教える腰痛・骨盤矯正のパーソナル",
      description:
        seo.ogDescription ??
        seo.metaDescription ??
        "横手市で整体をお探しの方へ。腰痛や身体の不調にお悩みならVERDE FITへ。厚生労働省認可の国家資格（柔道整復師）を持つ院長が延べ5,000人以上を施術。横手市で痛みの根本改善を目指す整体院です。初回体験受付中。",
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, access] = await Promise.all([
    safeFetch<SiteSettingsSanity>(
      `*[_type == "siteSettings"][0]{ bookingUrl, instagramUrl, lineUrl, footerDescription, copyrightYear, logo{ asset{ _ref, _type } }, favicon{ asset{ _ref, _type } } }`
    ),
    safeFetch<AccessPartialSanity>(
      `*[_type == "access"][0]{ phone, postalCode, address, hours, lastEntry, closedDays }`
    ),
  ]);

  const phone = access?.phone ?? undefined;
  const instagramUrl = settings?.instagramUrl ?? undefined;
  const lineUrl = settings?.lineUrl ?? undefined;
  const bookingUrl = settings?.bookingUrl ?? undefined;
  const footerDescription = settings?.footerDescription ?? undefined;
  const copyrightYear = settings?.copyrightYear ?? undefined;
  const logoUrl = settings?.logo ? urlForImage(settings.logo) : undefined;

  return (
    <MenuProvider>
      <Header phone={phone} logoUrl={logoUrl} bookingUrl={bookingUrl} />
      <main>{children}</main>
      <Footer
        phone={phone}
        instagramUrl={instagramUrl}
        lineUrl={lineUrl}
        footerDescription={footerDescription}
        copyrightYear={copyrightYear}
        logoUrl={logoUrl}
        postalCode={access?.postalCode}
        address={access?.address}
        hours={access?.hours}
        lastEntry={access?.lastEntry}
        closedDays={access?.closedDays}
      />
      <FloatingButtons phone={phone} bookingUrl={bookingUrl} />
    </MenuProvider>
  );
}
