new TypeIt("#nickname", {
  speed: 50,
  cursor: false,
  afterComplete: (s, i) => i.destroy(),
}).type('panwacław').go();
new TypeIt("#full-name", {
  startDelay: 1000,
  speed: 50,
  cursor: false,
  afterComplete: (s, i) => i.destroy(),
}).type("Вячаслаў").pause(500).delete().type("Wacław").pause(500).type(" Kozłowski").go();
new TypeIt("#job-name", {
  startDelay: 4000,
  speed: 50,
  afterComplete: (s, i) => i.destroy(),
}).type('Python').pause(500).delete().type('Django').pause(500).type(' dev').move('START').type('Python/').move(8).delete(1).type('D').move('END').type('eloper').pause(700).move(-10).delete(7).type(' Fullstack').move('END').go();