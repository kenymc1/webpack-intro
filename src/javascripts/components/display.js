import utils from '../helpers/utils';
import textData from '../helpers/data/textData';

const showDisplay = () => {
  const text = textData.getText();
  const domString = `<h2>${text}</h2>`;
  utils.printToDom('display-container', domString);
};

export default { showDisplay };
