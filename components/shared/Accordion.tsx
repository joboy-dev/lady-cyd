import React, { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
// import { chooseRandomItem } from "../../../lib/utils/random";

interface AccordionItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>
  title: string;
  subtitle?: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="mb-2">
            <button
              onClick={() => toggle(item.id)}
              className={clsx(
                "w-full flex justify-between items-center px-5 py-4 focus:outline-none transition-colors duration-200",
                isOpen
                  ? "bg-primary text-white"
                  : "bg-secondary/60 text-foreground hover:bg-secondary"
              )}
            >
              <div className="flex items-center gap-x-4">
                {item.icon && <item.icon
                    className={clsx(
                        "h-5 w-5",
                        isOpen ? "text-white" : "text-primary"
                    )}
                />}
                <div>
                  <p className="text-left font-cinzel font-semibold tracking-wide uppercase text-sm">{item.title}</p>
                  {item.subtitle && <p className={clsx("text-left text-xs mt-0.5", isOpen ? "text-white/80" : "text-muted-foreground")}>{item.subtitle}</p>}
                </div>
              </div>
              {isOpen
                ? <ChevronUp className="w-4 h-4 flex-shrink-0" />
                : <ChevronDown className="w-4 h-4 flex-shrink-0 text-primary" />}
            </button>
            {isOpen && (
              <div className="px-5 py-4 bg-secondary/40 border-x border-b border-primary/20 text-sm text-foreground leading-relaxed">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
