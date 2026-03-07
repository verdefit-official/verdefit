"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqItems = [
  {
    key: "q1",
    question: "運動が全くの初心者でも大丈夫ですか？",
    answer:
      "はい、もちろん大丈夫です。VERDE FITではお客様の体力レベルや身体の状態に合わせて、無理のないプログラムを設計します。運動未経験の方や、久しぶりに運動を始める方も安心してお越しください。",
  },
  {
    key: "q2",
    question: "食事制限は厳しいですか？",
    answer:
      "厳しい食事制限は行いません。好きなものを完全に我慢するのではなく「いつ・何を・どれだけ食べるか」を一緒に見直していきます。ストレスなく続けられる食習慣を身につけることを大切にしています。",
  },
  {
    key: "q3",
    question: "リバウンドしませんか？",
    answer:
      "VERDE FITでは体型だけでなく、生活習慣・食習慣の根本から変えることを目指しています。トレーニングが終わった後も自分で管理できる「習慣」を一緒に作るため、リバウンドしにくい体づくりをサポートします。",
  },
  {
    key: "q4",
    question: "オンラインでのトレーニングも可能ですか？",
    answer:
      "はい、対応可能です。遠方にお住まいの方や、外出が難しい方のためにオンライントレーニングもご用意しています。詳細は初回カウンセリング時にご相談ください。",
  },
  {
    key: "q5",
    question: "子供連れでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。キッズスペースをご用意しております。お子様連れでも安心してトレーニングに集中していただけます。事前にお子様の人数をお知らせください。",
  },
  {
    key: "q6",
    question: "分割払いはできますか？",
    answer:
      "はい、クレジットカードによる分割払いに対応しています。プランによって分割回数が異なりますので、詳しくは初回カウンセリング時にご説明します。まずはお気軽にご相談ください。",
  },
];

function AccordionItem({ item }: { item: typeof faqItems[0] }) {
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

export default function PersonalFAQ() {
  return (
    <section id="faq" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              よくある質問
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-base">
              ご予約前の不安や疑問を解消します
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem key={item.key} item={item} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
