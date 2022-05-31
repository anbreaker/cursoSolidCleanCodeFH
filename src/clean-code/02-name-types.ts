(() => {
  // celsius temperature list
  const celsiusTemperatureList = [33.6, 12.34];

  // Server ip address
  const serverIp = '123.123.123.123';

  // Users list
  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  // List of user emails
  const emails = users.map((user) => user.email);

  // Boolean variables of a video game
  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = true;

  // Other exercises
  // initial time
  const startTime = new Date().getTime();
  //....
  // 3 doritos later
  //...
  // Time at the end
  const endTime = new Date().getTime() - startTime;

  // Functions
  // Gets the books
  function getBooks() {
    throw new Error('Function not implemented.');
  }

  // get books from a URL
  function getBooksFromUrl(url: string) {
    throw new Error('Function not implemented.');
  }

  // obtains the area of a square based on its sides
  function getSquareArea(side: number) {
    throw new Error('Function not implemented.');
  }

  // print the job
  function printJob() {
    throw new Error('Function not implemented.');
  }
})();
