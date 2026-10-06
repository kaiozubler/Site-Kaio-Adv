export function JusticeScale({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <g className="scale-draw" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Base decorativa */}
        <ellipse pathLength={1} cx="210" cy="468" rx="72" ry="17" strokeWidth="3" />
        <path pathLength={1} d="M154 462 Q210 480 266 462" />
        <path pathLength={1} d="M166 448 Q210 463 254 448" />
        <path pathLength={1} d="M182 434 L238 434" strokeWidth="4" />

        {/* Coluna central, levemente cônica */}
        <path pathLength={1} d="M199 434 L191 160" strokeWidth="3" />
        <path pathLength={1} d="M221 434 L229 160" strokeWidth="3" />
        <path pathLength={1} d="M193 320 L227 320" strokeWidth="1.5" />

        {/* Capitel */}
        <path pathLength={1} d="M180 160 Q210 138 240 160" strokeWidth="4" />
        <ellipse pathLength={1} cx="210" cy="158" rx="20" ry="8" strokeWidth="3" />

        {/* Finial / topo ornamentado */}
        <path pathLength={1} d="M210 138 L210 108" strokeWidth="4" />
        <path pathLength={1} d="M196 112 Q210 88 224 112" strokeWidth="3" />
        <path pathLength={1} d="M203 108 L210 84 L217 108" strokeWidth="2.5" />

        {/* Braco transversal em arco suave, com voltas nas pontas */}
        <path pathLength={1} d="M56 118 Q140 76 210 96 Q280 76 364 118" strokeWidth="4" />
        <path
          d="M56 118 Q46 100 60 90 Q76 84 80 100 Q82 112 68 118"
          strokeWidth="2.5"
        />
        <path
          d="M364 118 Q374 100 360 90 Q344 84 340 100 Q338 112 352 118"
          strokeWidth="2.5"
        />

        {/* Corrente esquerda — prato mais alto */}
        <path pathLength={1} d="M64 122 L106 258" strokeWidth="1.75" />
        <path pathLength={1} d="M92 122 L118 258" strokeWidth="1.75" />

        {/* Prato esquerdo */}
        <ellipse pathLength={1} cx="112" cy="270" rx="70" ry="13" strokeWidth="3" />
        <path pathLength={1} d="M42 266 Q112 296 182 266" strokeWidth="3" />

        {/* Corrente direita — prato mais baixo */}
        <path pathLength={1} d="M356 122 L308 322" strokeWidth="1.75" />
        <path pathLength={1} d="M328 122 L318 322" strokeWidth="1.75" />

        {/* Prato direito */}
        <ellipse pathLength={1} cx="313" cy="334" rx="76" ry="14" strokeWidth="3" />
        <path pathLength={1} d="M237 330 Q313 362 389 330" strokeWidth="3" />
      </g>
    </svg>
  )
}
