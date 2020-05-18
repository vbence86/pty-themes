export default { title: 'Components' };

export const Button = () => '<button>Hello World</button>';

export const ButtonWithEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
