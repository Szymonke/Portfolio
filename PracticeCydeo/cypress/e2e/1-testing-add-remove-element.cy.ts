import addRemoveElementsPage from "../pages/AddRemoveElements";
import homePage from "../pages/Home"

describe('Tests adding and removing elements in real time', () => {
  beforeEach(() => {
    homePage.visit()
    homePage.accessPage(homePage.addRemoveElementsNavButton)
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