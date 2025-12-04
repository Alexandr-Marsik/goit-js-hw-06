class User {
  constructor(email) {
    this.email = email;
  }
  getemail() {
    return this.email;
  }
  setemail(newEmail) {
    this.email = newEmail;
  }
}
class ContentEditor extends User {
  constructor(params) {
    super(params.email);
    this.posts = params.posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
}
const editor = new ContentEditor({
  email: 'mango@mail.com',
  posts: [],
});
console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }
editor.addPost('post-1');
editor.addPost('post-2');
console.log(editor.posts); // ['post-1', 'post-2']
