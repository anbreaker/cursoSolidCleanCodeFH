(() => {
  // Applying the principle of sole responsibility
  // Prioritizing composition over inheritance

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    surname: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public surname: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, surname, gender, birthdate }: PersonProps) {
      this.name = name;
      this.surname = surname;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    name: string;
    role: string;
    surname: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      surname,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ name, surname, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1985-10-21'),
    email: 'anbreaker@google.com',
    gender: 'M',
    lastFolderOpen: '/home',
    name: 'anbreaker',
    surname: 'anbreaker',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
})();
