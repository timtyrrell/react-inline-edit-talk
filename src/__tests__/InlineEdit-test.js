import React from 'react/addons'
const { addons: { TestUtils } } = React
import { expect } from 'chai';
import Editor from '../InlineEdit';

describe('Inline Edit Component', () => {
  it('fake test', () => {
    expect(1).to.equal(1);
  });

  // render a component "one level deep" and assert facts about what its render method returns
  it('shallow renders without problems', () => {
    let shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Editor/>);
    let editor = shallowRenderer.getRenderOutput();
    expect(editor).to.exist;
  });

  // Render a component into a detached DOM node in the document.
  it('DOM testing', () => {
    let editor = TestUtils.renderIntoDocument(<Editor/>);
    let node = React.findDOMNode(editor);
    expect(node.textContent).to.equal('Some Words');
    expect(node.tagName).to.equal('DIV');
  });

  it('double clicks changes to textbox', () => {
    let editor = TestUtils.renderIntoDocument(<Editor/>);
    let node = React.findDOMNode(editor);
    TestUtils.Simulate.doubleClick(node)
    expect(node.firstChild.nodeName).to.equal('INPUT')
  });
});
