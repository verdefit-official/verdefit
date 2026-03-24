"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type FAQItem = {
  question?: string | null;
  answer?: string | null;
};

type PersonalFAQData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  items?: FAQItem[] | null;
};

const defaultFaqItems = [
  { key: "q1", question: "運動が苦手でも大丈夫ですか？", answer: "はい、もちろん大丈夫です。横手市のVERDE FITでは、お客様の8割以上が運動未経験または久しぶりの方です。体力レベルに合わせて、無理のないプログラムを作成しますので安心してご参加ください。" },
  { key: "q2", question: "食事制限は厳しいですか？", answer: "厳しい食事制限は行いません。一生続けられる食事管理を身につけることを目標にしています。外食が多い方、料理が苦手な方でも実践できる、現実的な食事管理をサポートします。" },
  { key: "q3", question: "どのくらいで効果が出ますか？", answer: "個人差はありますが早い方では1〜2か月で身体の変化を実感される方も多いです。体重だけでなく、体型や体調の変化も感じていただけるようサポートします。" },
  { key: "q4", question: "リバウンドはしませんか？", answer: "無謀なダイエットではなく、運動と食事の習慣化を重視しているためリバウンドしにくい身体づくりを目指します。卒業後も続けられる習慣を身につけていただきます。" },
  { key: "q5", question: "駐車場はありますか？", answer: "はい、専用駐車場を完備しております。駐車場の場所は予約時にご案内いたします。" },
  { key: "q6", question: "どんな服装で行けばいいですか？", answer: "動きやすい服装と室内シューズをご用意ください。お飲み物もあると安心です。" },
  { key: "q7", question: "子供を連れて行っても大丈夫ですか？", answer: "はい、大丈夫です。院内にキッズスペースをご用意しており、トレーニング中は女性スタッフがお子様を見守りますので安心して施術を受けていただけます。ご予約時にお子様連れの旨をお知らせください。" },
  { key: "q8", question: "分割払いは可能ですか？", answer: "はい、可能です。クレジットカードでの分割払いにも対応しております。詳しくはカウンセリング時にご相談ください。" },
];

function AccordionItem({ item }: { item: { key: string; question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <button
        className="flex w-full items-start gap-3 px-5 py-4 text-left md:px-6 md:py-5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-900 font-sans text-sm font-bold text-white">
          Q
        </span>
        <span className="flex-1 pt-1 text-sm font-bold leading-7 text-[#1f2937] md:text-[15px] md:leading-8">
          {item.question}
        </span>
        <span
          className={`mt-1 ml-2 shrink-0 text-green-700 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="flex items-start gap-3 border-t border-gray-100 px-5 py-4 md:px-6 md:py-5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-700 font-sans text-sm font-bold text-white">
            A
          </span>
          <p className="pt-1 text-sm leading-7 text-gray-700 md:text-[14px] md:leading-8">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PersonalFAQ({ data }: { data?: PersonalFAQData | null }) {
  const sectionTitle = data?.sectionTitle ?? "よくある質問";
  const sectionDescription = data?.sectionDescription ?? "横手市でのダイエット・ジム選びの疑問を解消";
  const items =
    data?.items && data.items.length > 0
      ? data.items.map((item, i) => ({
          key: defaultFaqItems[i]?.key ?? String(i),
          question: item.question ?? "",
          answer: item.answer ?? "",
        }))
      : defaultFaqItems;

  return (
    <section id="faq" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl whitespace-pre-line text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-3">
            {items.map((item) => (
              <AccordionItem key={item.key} item={item} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
