/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 800, height: 500, title: 'Map3DFigma' });

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  if (msg.type === 'CanvasToImage') {
    const nodes = [];
    for (let i = 0; i < 1; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: 'IMAGE', scaleMode: "FILL", imageHash: figma.createImage(msg.newBytes).hash }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
};