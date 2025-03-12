function solution() {
  
  class Post {
    constructor(title, content) {
      this.title = title,
      this.content = content
    }

    toString() {
      let output = '';
      output += `Post: ${this.title}`;
      output += `\n`;
      output += `Content: ${this.content}`;
      return output
    }
  }

  class SocialMediaPost extends Post{
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes,
      this.dislikes = dislikes,
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment)
    }

    toString() {
      let output = '';
      output += `Post: ${this.title}` + `\n`;
      output +=  `Content: ${this.content}` + `\n`;
      output +=  `Rating: ${this.likes - this.dislikes}`;

      if (this.comments.length) {
        output += `\n` + `Comments:`;
        for (const comment of this.comments) {
          output +=  `* ${comment}` + '\n';
        }
      }
      
      return output.trim()
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++
    }

    toString() {
      let output = '';
      output +=  `Post: ${this.title}` + `\n`;
      output +=  `Content: ${this.content}` + `\n`;
      output +=  `Views: ${this.views}` + `\n`;
      
      return output.trim();
    }
  }

  return { Post, SocialMediaPost, BlogPost}
}


const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString())

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());