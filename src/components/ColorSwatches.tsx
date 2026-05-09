import { colorRows } from '@/data/tokenTables';

export function ColorSwatches() {
  return (
    <section className="swatchGrid" aria-label="CT6 color palette">
      {colorRows.map((color) => (
        <article className="swatchCard" key={color.token}>
          <div className="swatch" style={{ background: color.hex }} />
          <div>
            <h3>{color.name}</h3>
            <code>{color.hex}</code>
            <p>{color.token}</p>
            <small>{color.usage}</small>
          </div>
        </article>
      ))}
    </section>
  );
}
