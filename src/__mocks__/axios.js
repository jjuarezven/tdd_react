const axiosMock = jest.genMockFromModule("axios");

const mockResponse = {
  data: { shops: [{ location: "test location", address: "test address" }] }
};

axiosMock.get.mockImplementation(req);

function req() {
  return new Promise(function (resolve) {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
}

module.exports = axiosMock;
