// In-memory database for testing (without MongoDB)
// Replace this with real MongoDB when configured

class MockDatabase {
  constructor() {
    this.users = [];
    this.id = 1;
  }

  async findUser(email) {
    return this.users.find(u => u.email === email);
  }

  async createUser(userData) {
    const id = this.id++;
    const user = {
      _id: id,
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async findUserById(id) {
    return this.users.find(u => u._id === Number(id));
  }

  clear() {
    this.users = [];
    this.id = 1;
  }
}

export const mockDB = new MockDatabase();
