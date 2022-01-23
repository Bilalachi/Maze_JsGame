# Maze_JsGame

The difficulty is in having the dexterity to move the mouse through
without touching any walls. When the mouse cursor touches a wall, all
walls turn red and a "You lost" message shows. Touching the Start
button with the mouse removes the red coloring from the walls.
The maze walls are 5 div elements. A provided CSS puts the divs into
their proper places.

When the user clicks the mouse on the Start square (a
div with an id of start), the maze state will reset. That is, if the
maze boundary walls are red, they will all return to their normal
color, so that the user can try to get thare put into that div when the user finishes the
maze.

Finally, a scoring system. Users gain 5 points when they win and
lose 10 when they lose. The restart button should restart the score
also, obviously.
