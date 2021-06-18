const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: {
    shops: [
      {
        location: "test location",
        address: "test address"
      }
    ]
  }
};

axiosMock.get.mockImplementation(req);

function req() {
  return new Promise(function (resolve) {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 500);
  });
}

module.exports = axiosMock;
