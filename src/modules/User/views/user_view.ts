export default {
  render(user: any) {
      return {
          id: user.id,
          name: user.name,
          email: user.email,
      };
  }
}