import {
  breakpointRows,
  colorRows,
  motionRows,
  radiusRows,
  shadowRows,
  spacingRows,
  typographyRows,
  zIndexRows,
} from '@/data/tokenTables';

type Variant = 'tokens' | 'colors' | 'typography' | 'layout';

export function TokenTables({ variant }: { variant: Variant }) {
  return (
    <div className="tokenTableStack">
      {(variant === 'tokens' || variant === 'colors') ? (
        <TokenTable title="Color tokens" rows={colorRows.map((row) => ({ Name: row.name, Token: row.token, Value: row.hex, Usage: row.usage }))} />
      ) : null}
      {(variant === 'tokens' || variant === 'typography') ? (
        <TokenTable title="Typography tokens" rows={typographyRows.map((row) => ({ Style: row.style, Token: row.token, Size: row.size, 'Line height': row.lineHeight, Weight: row.weight, Usage: row.usage }))} />
      ) : null}
      {(variant === 'tokens' || variant === 'layout') ? (
        <TokenTable title="Spacing tokens" rows={spacingRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
      ) : null}
      {variant === 'tokens' ? (
        <>
          <TokenTable title="Radius tokens" rows={radiusRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
          <TokenTable title="Shadow tokens" rows={shadowRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
          <TokenTable title="Motion tokens" rows={motionRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
          <TokenTable title="Breakpoint tokens" rows={breakpointRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
          <TokenTable title="Z-index tokens" rows={zIndexRows.map((row) => ({ Token: row.token, Value: row.value, Usage: row.usage }))} />
        </>
      ) : null}
    </div>
  );
}

function TokenTable({ title, rows }: { title: string; rows: ReadonlyArray<Record<string, string>> }) {
  const headings = Object.keys(rows[0] ?? {});
  return (
    <section className="panel tablePanel">
      <h2>{title}</h2>
      <div className="tableWrap">
        <table>
          <thead>
            <tr>{headings.map((heading) => <th key={heading}>{heading}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {headings.map((heading) => <td key={heading}>{row[heading]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}