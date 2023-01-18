type Comment = {
  text: string;
  sentiment: string;
};
type Blog = {
  id: string;
  index: Number;
  title: string;
  text: string;
  timestamp: string;
  tags: string[];
  url: string;
  image: string;
  comments: Comment[];
  authors: string;
};

export default Blog;
