const UserController = require("./user-controller");
const User = require("./user");

describe("UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test("Adding a user to userController", () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

  test("Adding a user that is not in the users' list", () => {
    const newUser = new User(5678, "Alice", "alice@example.com");
    userController.add(newUser);
    expect(userController.getUsers()).toContain(newUser);
  });
});

describe("UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test("Removing a user from userController", () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

  test("Removing a user that is not in the users' list", () => {
    const userToRemove = new User(5678, "Alice", "alice@example.com");
    userController.remove(userToRemove);
    expect(userController.getUsers()).not.toContain(userToRemove);
  });
});

describe("UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test("Finding a user by email (existing user)", () => {
    const existingUser = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(existingUser);
    const foundUser = userController.findByEmail("santiago@generation.org");
    expect(foundUser).toEqual(existingUser);
  });

  test("Finding a user by email (non-existing user)", () => {
    const nonExistingEmail = "nonexistent@example.com";
    const foundUser = userController.findByEmail(nonExistingEmail);
    expect(foundUser).toBeUndefined();
  });
});


describe("UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test("Finding a user by ID (existing user)", () => {
    const existingUser = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(existingUser);
    const foundUser = userController.findById(1234);
    expect(foundUser).toEqual(existingUser);
  });

  test("Finding a user by ID (non-existing user)", () => {
    const nonExistingId = 5678;
    const foundUser = userController.findById(nonExistingId);
    expect(foundUser).toBeUndefined();
  });
});


