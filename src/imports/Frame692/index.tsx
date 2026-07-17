import svgPaths from "./svg-5ci3fx2p6j";

function Calendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #1EB8E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #1EB8E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #1EB8E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #1EB8E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#1eb8e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Calendar />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1eb8e7] text-[18px] text-center text-ellipsis tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45] overflow-hidden text-ellipsis">Attend Event</p>
      </div>
    </button>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart">
          <path d={svgPaths.p3ee62280} id="Vector" stroke="var(--stroke-0, #1EB8E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#e5f4fb] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <Heart />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1eb8e7] text-[18px] text-center text-ellipsis tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45] overflow-hidden text-ellipsis">Volunteer</p>
      </div>
    </button>
  );
}

function Gift() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="gift">
          <path d="M20 12V22H4V12" id="Vector" stroke="var(--stroke-0, #F09345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 7H2V12H22V7Z" id="Vector_2" stroke="var(--stroke-0, #F09345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 22V7" id="Vector_3" stroke="var(--stroke-0, #F09345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22b4c780} id="Vector_4" stroke="var(--stroke-0, #F09345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2fc89700} id="Vector_5" stroke="var(--stroke-0, #F09345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-[#fef2e5] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <Gift />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#f09345] text-[18px] text-center text-ellipsis tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45] overflow-hidden text-ellipsis">Donate</p>
      </div>
    </button>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[15px] items-start relative size-full">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}