import { CheckCircle2 } from "lucide-react";

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  const metadataPatterns = /^(Estimated Word Count:|Internal Link:|Meta Description:|Keywords:|SEO Title:|CTA Text:|CTA Link:|Focus Keyword:|Slug:)/i;
  const blocks = content.split("\n\n").filter(block => !metadataPatterns.test(block.trim()));

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        // H2
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-heading text-xl md:text-2xl font-bold text-foreground mt-10 mb-2 pb-2 border-b border-border"
            >
              {block.replace("## ", "")}
            </h2>
          );
        }

        // H3
        if (block.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="font-heading text-lg md:text-xl font-semibold text-foreground mt-6 mb-1"
            >
              {block.replace("### ", "")}
            </h3>
          );
        }

        // Unordered list
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter(Boolean);
          return (
            <ul key={i} className="space-y-2.5 my-4">
              {items.map((li, j) => {
                const text = li.replace(/^- /, "");
                return (
                  <li key={j} className="flex items-start gap-3 group">
                    <span className="mt-1 shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary" />
                    </span>
                    <span
                      className="text-sm md:text-[15px] leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: text.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-foreground font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          );
        }

        // Ordered list
        if (block.match(/^\d+\./)) {
          const items = block.split("\n").filter(Boolean);
          return (
            <ol key={i} className="space-y-3 my-4">
              {items.map((li, j) => {
                const text = li.replace(/^\d+\.\s*/, "");
                return (
                  <li key={j} className="flex items-start gap-3.5">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span
                      className="text-sm md:text-[15px] leading-relaxed text-muted-foreground flex-1"
                      dangerouslySetInnerHTML={{
                        __html: text.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-foreground font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </li>
                );
              })}
            </ol>
          );
        }

        // Table
        if (block.startsWith("|")) {
          const rows = block
            .split("\n")
            .filter((r) => !r.match(/^\|[\s-|]+$/));
          if (rows.length < 2) return null;
          const headers = rows[0]
            .split("|")
            .filter(Boolean)
            .map((h) => h.trim());
          const body = rows.slice(1);
          return (
            <div
              key={i}
              className="overflow-x-auto rounded-lg border border-border my-6"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    {headers.map((h, hi) => (
                      <th
                        key={hi}
                        className="px-4 py-3 text-left font-heading font-semibold text-foreground border-b border-border"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
                    >
                      {row
                        .split("|")
                        .filter(Boolean)
                        .map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-4 py-3 text-muted-foreground"
                          >
                            {cell.trim()}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Paragraph
        return (
          <p
            key={i}
            className="text-sm md:text-[15px] leading-[1.8] text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: block.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-foreground font-semibold">$1</strong>'
              ),
            }}
          />
        );
      })}
    </div>
  );
};

export default BlogContent;
