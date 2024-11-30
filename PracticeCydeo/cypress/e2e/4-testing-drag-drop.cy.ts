import DragAndDropPage from "../pages/DragAndDrop";

describe('', () => {
    beforeEach(() => {
        DragAndDropPage.visit()
    });
    it('Tests Dragndrop using standard cypress commands', () => {
        DragAndDropPage.standardCypressDrag()
    });

    it('Tests Dragndrop using a plugin', () => {
        DragAndDropPage.pluginDrag()
    });
});