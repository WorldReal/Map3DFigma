/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 768, height: 480, title: 'Map3DFigma' });

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    const nodes = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  if (msg.type === 'CanvasToImage') {
    const nodes = [];
    for (let i = 0; i < 3; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      console.log(msg.image)
      rect.fills = [{ type: 'IMAGE',scaleMode: "FILL",imageHash: msg.image }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

   
    const selected = figma.currentPage.selection[0]
    invertImages(selected, msg.image)
    // msg.image

  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};


async function invertImages(node,msgImage) {
  debugger
  console.log('invertImages',msgImage)
  const newFills = []
  for (const paint of node.fills) {
    if (paint.type === 'IMAGE') {
      // Get the (encoded) bytes for this image.
      // const image = figma.getImageByHash(paint.imageHash)
      // const bytes = await image.getBytesAsync()

      // // Create an invisible iframe to act as a "worker" which
      // // will do the task of decoding and send us a message
      // // when it's done.
      // figma.showUI(__html__, { visible: false })

      // // Send the raw bytes of the file to the worker.
      // figma.ui.postMessage(bytes)

      // // Wait for the worker's response.
      // const newBytes = await new Promise((resolve, reject) => {
      //   figma.ui.onmessage = value => resolve(value)
      // })

      // // Create a new paint for the new image.
      // const newPaint = JSON.parse(JSON.stringify(paint))
      // newPaint.imageHash = figma.createImage(newBytes).hash
      newPaint.imageHash = msgImage
      newFills.push(newPaint)
    }
  }
  node.fills = newFills
}