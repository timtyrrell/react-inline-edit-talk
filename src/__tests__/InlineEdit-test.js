import React from 'react/addons'
const { addons: { TestUtils } } = React
import { expect } from 'chai';
import Editor from '../InlineEdit';

describe('Component', () => {
  it('fake test', () => {
    expect(1).to.equal(1);
  });

  it('shallow renders without problems', () => {
    let shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Editor/>);
    let editor = shallowRenderer.getRenderOutput();
    expect(editor).to.exist;
  });

  it('renders without problems', () => {
    let editor = TestUtils.renderIntoDocument(<Editor/>);
    expect(editor).to.exist;
  });
});
