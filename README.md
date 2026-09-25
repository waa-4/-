# Bugbrain Sandbox
GitHub Pages-ready 3D sandbox.

Files are separated on purpose:
- `mind.js` — emotions, needs, memory, decisions
- `world.js` — beings, physics-ish movement, world objects
- `config.js` — 14 being types and tools
- `main.js` — renderer, UI, input

Tools: Spawn, Select, Build, Transform, Clone, Edit Mind, Terrain, Water, Food, Shelter, Delete.

Current pathfinding is goal steering (lightweight prototype), not a full navmesh/A* solver yet. That can be swapped in later without rewriting the mind file.

Upload everything to a GitHub repo and enable Pages. Internet access is needed for the Three.js CDN.
