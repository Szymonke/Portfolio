import addRemoveElementsPage from "../pages/AddRemoveElements";

describe('Tests adding and removing elements in real time', () => {
  beforeEach(() => {
    addRemoveElementsPage.visit()
  });
  it('Tests adding an element', () => {
    addRemoveElementsPage.clickButtonXTimes(0)
    addRemoveElementsPage.deleteXElements(0)
    addRemoveElementsPage.clickButtonXTimes(3)
    addRemoveElementsPage.deleteXElements(5)
    addRemoveElementsPage.clickButtonXTimes(3)
    addRemoveElementsPage.deleteXElements(2)
  })
})