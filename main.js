const sink = document.querySelector('[data-trigger-outlet]');
const buttons = document.querySelectorAll('[data-trigger-button]');
const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

for (const button of buttons) {
  button.addEventListener('click', handleClick);
}

function handleClick(e) {
  displayWinner(
    e.currentTarget.dataset.triggerButton,
    possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
  );
}

function displayWinner(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock': {
      sink.innerText = `It's a draw! You both chose ${userChoice}.`;
      break;
    }
    case 'paperscissors':
    case 'rockpaper':
    case 'lizardrock':
    case 'spocklizard':
    case 'scissorsspock':
    case 'lizardscissors':
    case 'paperlizard':
    case 'spockpaper':
    case 'rockspock':
    case 'scissorsrock': {
      sink.innerText = `Sorry, the computer won! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${userChoice}.`;
      break;
    }
    case 'scissorspaper':
    case 'paperrock':
    case 'rocklizard':
    case 'lizardspock':
    case 'spockscissors':
    case 'scissorslizard':
    case 'lizardpaper':
    case 'paperspock':
    case 'spockrock':
    case 'rockscissors': {
      sink.innerText = `Congratulations, you won! ${
        userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
      } beats ${computerChoice}.`;
      break;
    }
    default: {
      throw new Error('Oops! Something went wrong');
    }
  }
}
