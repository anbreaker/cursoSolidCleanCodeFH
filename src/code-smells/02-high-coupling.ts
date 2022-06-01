(() => {
  // Not applying the principle of sole responsibility
  type Gender = 'M' | 'F';

  // High Coupling

  class Person {
    constructor(
      public name: string,
      public surname: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      surname: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, surname, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      name: string,
      surname: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), name, surname, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'anbreaker',
    'anbreaker',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
