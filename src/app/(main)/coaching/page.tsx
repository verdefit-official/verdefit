import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import CoachingHero from "@/components/sections/CoachingHero";
import CoachingWhyFail from "@/components/sections/CoachingWhyFail";
import CoachingMethod from "@/components/sections/CoachingMethod";
import CoachingFeatures from "@/components/sections/CoachingFeatures";
import CoachingTestimonials from "@/components/sections/CoachingTestimonials";
import CoachingPricing from "@/components/sections/CoachingPricing";
import PersonalCancelPolicy from "@/components/sections/PersonalCancelPolicy";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Access from "@/components/sections/Access";

export const metadata: Metadata = {
  title: "横手市・秋田のコーチング｜思考と習慣を変える本格プログラム VERDE FIT",
  description:
    "横手市・秋田でコーチングをお探しの方へ。VERDE FITはCOMPASS認定プロコーチによる認知科学アプローチで、ダイエット・運動・健康習慣の継続をサポート。「続かない」を「続く」に変える本格コーチングプログラム。初回無料相談受付中。",
  keywords: [
    "横手市 コーチング",
    "秋田 コーチング",
    "横手市 習慣化",
    "横手市 ダイエット コーチング",
    "VERDE FIT コーチング",
  ],
  openGraph: {
    title: "横手市・秋田のコーチング｜思考と習慣を変える本格プログラム VERDE FIT",
    description:
      "横手市・秋田でコーチングをお探しの方へ。VERDE FITはCOMPASS認定プロコーチによる認知科学アプローチで、ダイエット・運動・健康習慣の継続をサポート。",
    locale: "ja_JP",
    type: "website",
  },
};

type AccessRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  storeName?: string;
  postalCode?: string;
  address?: string;
  phone?: string;
  hours?: string;
  lastEntry?: string;
  closedDays?: string;
  closedDaysNote?: string;
  parking?: string;
  payment?: string;
};

export default async function CoachingPage() {
  const [accessData, siteSettingsData] = await Promise.all([
    safeFetch<AccessRaw>(`*[_type == "access"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;
  const phone = accessData?.phone ?? undefined;

  const coachingFAQItems = [
    {
      _key: "c1",
      question: "コーチングとはどんなことをするのですか？",
      answer:
        "コーチとの対話を通じて、あなたの思考パターンや行動習慣を整理し、理想の目標に向けた行動を設計していきます。VERDE FITでは健康習慣・ダイエット・運動習慣の継続に特化したコーチングを提供しています。",
    },
    {
      _key: "c2",
      question: "コーチングとカウンセリングの違いは何ですか？",
      answer:
        "カウンセリングは過去の悩みや問題の整理を中心とするのに対し、コーチングは未来目標達成に焦点を当てます。VERDE FITでは「どうすれば続くのか」を一緒に考え、習慣化をサポートします。",
    },
    {
      _key: "c3",
      question: "どんな人がコーチングを受けていますか？",
      answer:
        "ダイエットや運動が続かない方、生活習慣を整えたい方、健康的な生活を送りたい方などが多く利用されています。30〜50代を中心に、習慣を変えたい方が多く受けています。",
    },
    {
      _key: "c4",
      question: "どのくらいの期間で習慣は変わりますか？",
      answer:
        "個人差はありますが、多くの方が1〜2ヶ月で思考や行動変化を実感され、3〜6ヶ月ほどで習慣として定着していきます。焦らず無理のないペースで進めています。",
    },
    {
      _key: "c5",
      question: "横手が苦手でも受けられますか？",
      answer:
        "はい、どちらにも対応しています。横手市・秋田県南エリアの方は対面、遠方の方や忙しい方はオンラインで受けていただくことも可能です。ご希望に合わせてご案内します。",
    },
    {
      _key: "c6",
      question: "話すのが苦手でも大丈夫ですか？",
      answer:
        "はい、大丈夫です。コーチが丁寧に対話しながら進めるので、自然と話せる環境を作ります。整理に慣れていなくても安心して自分のペースで進めていただけます。",
    },
    {
      _key: "c7",
      question: "整体やパーソナルトレーニングと併用できますか？",
      answer:
        "はい、併用することでより効果的です。身体を整える整体、身体を動かすトレーニング、習慣を作るコーチングを組み合わせることで、より根本的な健康改善を目指します。",
    },
    {
      _key: "c8",
      question: "無料相談ではどんなことをしますか？",
      answer:
        "現在のお悩みや目標をお聞きし、あなたに合ったコーチングの進め方をご説明します。無理な勧誘はありませんので、まずは気軽にご相談ください。",
    },
  ];

  return (
    <>
      <CoachingHero bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <CoachingWhyFail />
      <CoachingMethod />
      <CoachingFeatures />
      <CoachingTestimonials />
      <CoachingPricing bookingUrl={bookingUrl} />
      <PersonalCancelPolicy sectionBg="bg-white" />
      <FAQ
        data={{
          sectionTitle: "よくある質問",
          sectionDescription: "横手市・秋田でコーチングを受ける前の疑問を解消",
          items: coachingFAQItems,
        }}
        sectionBg="bg-white"
      />
      <CTA
        data={{
          heading: "習慣が変われば人生も変わります",
          description:
            "「続けたいのに続かない」その原因は意志の弱さではありません。\n思考と習慣の仕組みを整えることで、行動は自然と続くようになります。\nまずは無料相談で、あなたの理想の未来と習慣づくりについて一緒に考えてみませんか。",
          primaryButtonText: "無料相談を予約する",
          secondaryButtonText: "LINEで相談する",
        }}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
        phone={phone}
      />
      <Access data={accessData} sectionBg="bg-white" />
    </>
  );
}
