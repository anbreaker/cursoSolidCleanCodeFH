import './style.css';
// import './clean-code/04-homework.ts';
// import './clean-code/05-dry';
// import './clean-code/06-classes-a';
// import './clean-code/06-classes-b';
// import './clean-code/06-classes-c';
// import './clean-code/07-task';
// import './code-smells/02-high-coupling';
// import './code-smells/02-low-coupling';
import './solid/01-srp';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode and SOLID</h1>
  <span>Check the JavaScript Console</span>
`;
