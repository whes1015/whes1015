import { visit } from "unist-util-visit";
import type { Root, Paragraph, Text, Parent } from "mdast";
import type { Plugin } from "unified";

export const customPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    visit<Root, "paragraph">(
      tree,
      "paragraph",
      (
        node: Paragraph,
        index: number | undefined,
        parent: Parent | undefined
      ) => {
        if (!node.children?.length || index === undefined || !parent) return;

        const firstChild = node.children[0] as Text;
        if (!firstChild?.value?.startsWith(":::")) return;

        const typeMatch = firstChild.value.match(/^:::(\w+)/);
        if (!typeMatch) return;

        const type = typeMatch[1];
        const contentNodes: Text[] = [];
        let endIndex = -1;

        for (let i = index; i < parent.children.length; i++) {
          const currentNode = parent.children[i] as Paragraph;
          if (!currentNode.children?.length) continue;

          const textNode = currentNode.children[0] as Text;
          if (textNode.value === ":::") {
            endIndex = i;
            break;
          }

          if (i !== index) {
            contentNodes.push(...(currentNode.children as Text[]));
          }
        }

        if (endIndex === -1) return;

        Object.assign(node, {
          type: "element",
          data: {
            hName: "div",
            hProperties: { className: "custom-info-box" },
          },
          children: [
            {
              type: "element",
              data: {
                hName: "infobox",
                hProperties: { type },
              },
              children: contentNodes,
            },
          ],
        });

        parent.children.splice(index + 1, endIndex - index);
      }
    );
  };
};
