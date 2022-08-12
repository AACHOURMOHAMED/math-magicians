import TestRenderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';
import Home from '../../pages/Home';
import Mathematics from '../../pages/Mathematics';
import Quotes from '../../pages/Quotes';

describe('test screenshots for all components', () => {
  test('matches Calculator snapshot', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = TestRenderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Mathematics snapshot', () => {
    const tree = TestRenderer.create(<Mathematics />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Quote snapshot', () => {
    const tree = TestRenderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
