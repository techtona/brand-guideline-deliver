import { problems } from "@/lib/brand";

export function Story() {
  return (
    <section className="section section--off" id="story">
      <div className="container">
        <p className="eyebrow">01 — Brand Story</p>
        <div className="story-grid">
          <div>
            <h2 className="h-section">
              Beternak harusnya soal beternak — bukan soal modal, sapronak, dan kebingungan menjual.
            </h2>
            <p className="lead mt-m">
              Deliver adalah startup agritech broiler <em>asset-light</em> yang dioperasikan PT Sarana
              Indonesia Maju. Kami hadir untuk peternak rakyat yang punya kandang dan kemauan, tapi
              terjebak siklus yang berat: modal mahal, sapronak tidak menentu, dan harga jual yang
              ditentukan pihak lain.
            </p>
            <p className="lead mt-s">
              Lewat model kemitraan cerdas, Deliver menyediakan permodalan input, sapronak berkualitas
              terstandar, dan jaminan akses pasar — semuanya dijalankan oleh <em>intelligent system</em>{" "}
              yang membuat setiap siklus terukur dan transparan. Hasilnya: peternak bertumbuh dengan
              kepastian, dan rantai pasok unggas jadi lebih efisien dari hulu ke hilir.
            </p>
          </div>
          <div>
            {problems.map((problem, i) => (
              <div key={problem.n} className={i === 0 ? "problem" : "problem mt-m"}>
                <div className="n">{problem.n}</div>
                <h4>{problem.title}</h4>
                <p>{problem.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
