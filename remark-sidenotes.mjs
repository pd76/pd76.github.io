// File: remark-sidenotes.mjs
import { visit } from 'unist-util-visit';

export function remarkSidenotes() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /{%\s*sidenote\s*"([^"]*)"\s*%}/g;
      let match;
      let lastIndex = 0;
      const children = [];

      while ((match = regex.exec(node.value)) !== null) {
        if (match.index > lastIndex) {
          children.push({ type: 'text', value: node.value.slice(lastIndex, match.index) });
        }

        children.push({
          type: 'html',
          value: `<span class="sidenote-wrapper">${match[1]}<span class="sidenote">${match[1]}</span></span>`
        });

        lastIndex = regex.lastIndex;
      }

      if (lastIndex < node.value.length) {
        children.push({ type: 'text', value: node.value.slice(lastIndex) });
      }

      if (children.length > 0) {
        parent.children.splice(index, 1, ...children);
        return index + children.length;
      }
    });
  };
}