import { zoneLegend } from "@/lib/simon-james-deck";

export function DeckZonesKey() {
  return (
    <div className="deck-zones-key mt-5 rounded-lg border border-brand-purple/20 bg-white/95 p-3 shadow-sm">
      <p className="font-heading text-[0.65rem] font-bold uppercase tracking-wider text-brand-purple">
        Key
      </p>
      <ul className="mt-2 space-y-1.5">
        {zoneLegend.map((z) => (
          <li key={z.letter} className="flex items-center gap-2 text-[0.7rem] text-brand-purple/85">
            <span
              className="h-3 w-3 shrink-0 rounded-sm border border-brand-purple/15"
              style={{ backgroundColor: z.color }}
              aria-hidden
            />
            <span>
              <span className="font-semibold text-brand-purple">Zone {z.letter}</span>
              {" — "}
              {z.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
