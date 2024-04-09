const fs = require('fs');

function readGraph(file) {
  const data = fs.readFileSync(file, 'utf8').trim().split('\n');
  const [n, m] = data[0].split(' ').map(Number);
  const edges = data.slice(1).map(line => line.split(' ').map(Number));
  return { n, m, edges };
}

function checkIrreflexive(graph) {
  const { edges } = graph;
  for (const edge of edges) {
    if (edge[0] === edge[1]) {
      return false;
    }
  }
  return true;
}

function checkSymmetric(graph) {
  const { edges } = graph;
  for (const edge of edges) {
    if (!edges.some(e => e[0] === edge[1] && e[1] === edge[0])) {
      return false;
    }
  }
  return true;
}

const graphFile = 'graph.txt';
const graph = readGraph(graphFile);
const irreflexive = checkIrreflexive(graph); 
const symmetric = checkSymmetric(graph); 

console.log(`Файл графа: ${graphFile}`);
console.log(`Іррефлексивний: ${irreflexive}`);
console.log(`Симетричний: ${symmetric}`);
