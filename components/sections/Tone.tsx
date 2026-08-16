import { principles, sayNot } from "@/lib/brand";

export function Tone() {
  return (
    <section className="section section--ink" id="tone">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">05 — Tone of Voice</p>
          <h2 className="h-section">Bicara seperti partner yang bisa diandalkan.</h2>
          <p className="lead mt-m">
            Suara Deliver percaya diri tanpa sombong, modern tanpa hype, dan selalu membumi — karena
            yang kami ajak bicara adalah peternak yang ingin kepastian, bukan janji.
          </p>
        </div>

        <div className="grid grid-4">
          {principles.map((principle) => (
            <div className="principle" key={principle.num}>
              <div className="num">{principle.num}</div>
              <h4>{principle.title}</h4>
              <p>{principle.body}</p>
            </div>
          ))}
        </div>

        <h3 className="h-sub mt-l">Say this, not that</h3>
        <div className="grid grid-2 mt-m">
          {sayNot.map((pair) => (
            <div className="saynot" key={pair.say}>
              <div className="saynot__cell saynot__say">
                <div className="saynot__lbl">✓ Say this</div>
                <div className="saynot__txt">{pair.say}</div>
              </div>
              <div className="saynot__cell saynot__not">
                <div className="saynot__lbl">✕ Not that</div>
                <div className="saynot__txt">{pair.not}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
