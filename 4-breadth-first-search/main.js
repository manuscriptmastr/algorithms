module.exports = function bfs(graphObject, start, end) {
  var visited = [];
  var frontier = [start];
  var cycle = 0;
  while(frontier.length !== 0) {
    cycle++;
    console.log(visited);
    var current = frontier.shift();
    if(current === end) {
      console.log('Found the shortest path in ' + cycle + ' tries!');
      return;
    }
    var newNeighbors = graphObject[current];
    newNeighbors = newNeighbors.filter((node) => !visited.includes(node));
    frontier.unshift(...newNeighbors);
    visited.push(current);
  }
}
