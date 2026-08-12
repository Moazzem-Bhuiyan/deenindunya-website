"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQGroup = {
  category: string;
  items: FAQItem[];
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line/80 last:border-none">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-sans text-[15px] font-medium text-espresso">
          {item.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-taupe-dark transition-transform duration-300 ease-premium ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-espresso-soft">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ groups }: { groups: FAQGroup[] }) {
  const [openKey, setOpenKey] = useState<string | null>(
    `${groups[0]?.category}-0`
  );

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
            {group.category}
          </p>
          <div className="mt-3">
            {group.items.map((item, i) => {
              const key = `${group.category}-${i}`;
              return (
                <AccordionItem
                  key={key}
                  item={item}
                  isOpen={openKey === key}
                  onToggle={() => setOpenKey(openKey === key ? null : key)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
