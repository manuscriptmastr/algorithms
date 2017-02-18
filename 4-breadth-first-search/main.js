module.exports = function bfs(graphObject, start, end) {
  var visited = [];
  var frontier = [start];
  var parentTree = {};
  while (frontier.length > 0) {
    var current = frontier.shift();
    if (current === end) {
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
  
}
