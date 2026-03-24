"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type FAQItem = {
  _key?: string;
  question?: string | null;
  answer?: string | null;
};

type FAQData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  items?: FAQItem[] | null;
};

const defaultFAQItems: FAQItem[] = [
  {
    _key: "q1",
    question: "初めてでも大丈夫ですか？運動経験がほとんどありません。",
    answer:
      "はい、もちろん大丈夫です。VERDE FITでは、お客様の8割以上が運動未経験または久しぶりの方です。あなたの体力レベルや身体の状態に合わせて、無理のないプログラムを作成しますので、安心してお越しください。",
  },
  {
    _key: "q2",
    question: "子供連れでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。キッズスペースを完備しており、お子様連れでも安心してお越しいただけます。小さなお子様がいらっしゃる方もお気軽にご相談ください。",
  },
  {
    _key: "q3",
    question: "どのくらいの頻度で通えばいいですか？",
    answer:
      "お悩みの内容や目標によって異なりますが、初期は週1〜2回、改善が見られてからは月2回程度のメンテナンスをおすすめしています。無理なく続けられるペースで、長期的な健康づくりをサポートします。",
  },
  {
    _key: "q4",
    question: "整体とパーソナルトレーニング、どちらを選べばいいですか？",
    answer:
      "初回のカウンセリングで、あなたの身体の状態や目標をお聞きし、最適なプランをご提案します。慢性的な痛みがある方は整体から、体力づくりや体型改善が目標の方はパーソナルトレーニングがおすすめですが、両方を組み合わせることも可能です。",
  },
  {
    _key: "q5",
    question: "支払い方法は何がありますか？",
    answer:
      "現金、クレジットカード、電子マネーに対応しています。回数券をご購入いただくと、1回あたりの料金がお得になります。詳しくは初回カウンセリング時にご説明します。",
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
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

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
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

export default function FAQ({ data, sectionBg = "bg-white" }: { data?: FAQData | null; sectionBg?: string }) {
  const sectionTitle = data?.sectionTitle ?? "よくある質問";
  const sectionDescription =
    data?.sectionDescription ?? "ご予約前の不安や疑問を解消します";
  const items =
    data?.items && data.items.length > 0 ? data.items : defaultFAQItems;

  return (
    <section id="faq" className={`${sectionBg} py-20 md:py-24`}>
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
            {items.map((item, i) => (
              <AccordionItem key={item._key ?? i} item={item} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
