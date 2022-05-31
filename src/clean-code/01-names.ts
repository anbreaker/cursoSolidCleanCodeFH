(() => {
  // Examples
  // Files to evaluate
  const fs = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Files to delete
  const filesToDelete = fs.map((file) => file.flagged);

  // Bad names...
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Good names...
  class User {}
  interface User {}

  // Todo: Task

  // Today
  const today = new Date();

  // Elapsed time in days
  const delapsedTimeInDays: number = 23;

  // Number of files in directory
  const numberFilesDirectory: number = 33;

  // First name
  const firstName = 'anbreaker';

  // Last name
  const surname = 'Antúnez';

  // Days since modification
  const daysSinceModification = 12;

  // Max classes per student
  const maxClassesPerStudent = 6;
})();
