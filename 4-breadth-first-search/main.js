module.exports = function bfs(graphObject, start, end) {
  var visited = [];
  var frontier = [start];
  var parentTree = {};
  var found = false;
  while (frontier.length > 0) {
    var current = frontier.shift();
    if (current === end) {
      found = true;
      break;
    }
    var neighbors = graphObject[current];
    visited.push(current);
    neighbors = neighbors.filter(neighbor => !visited.includes(neighbor));
    frontier.push(...neighbors);
    for (var neighbor of neighbors) {
      if (!parentTree.hasOwnProperty(neighbor)) {
        parentTree[neighbor] = current;
      }
    }
  }

  if (!found) {
    return [];
  }

  var bestPath = [];
  var node = end;
  while (node !== start) {
    bestPath.unshift(node);
    var parent = parentTree[node];
    node = parent;
  }
  bestPath.unshift(node);
  return bestPath;
}
