import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, MessageCircle, Share2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Community() {
  const { toast } = useToast();
  const [newPost, setNewPost] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      time: "2 hours ago",
      content: "Just completed my 30-day streak! 🌱 Small changes really do add up. Started by reducing plastic usage and now I'm composting too!",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Mike Johnson",
      time: "5 hours ago",
      content: "Tip: Switching to LED bulbs reduced my energy consumption by 25%! Easy win for the planet and my wallet.",
      likes: 42,
      comments: 12,
    },
    {
      id: 3,
      author: "Emma Davis",
      time: "1 day ago",
      content: "Challenge: Can we collectively save 1000kg of CO₂ this week? I'm starting by biking to work instead of driving. Who's with me?",
      likes: 67,
      comments: 23,
    },
    {
      id: 4,
      author: "Alex Rodriguez",
      time: "2 days ago",
      content: "Installed a rainwater harvesting system today! Excited to reduce my water consumption. Happy to share details if anyone's interested.",
      likes: 38,
      comments: 15,
    },
  ];

  const handleSubmitPost = () => {
    if (!newPost.trim()) return;
    
    toast({
      title: "Post Shared!",
      description: "Your post has been shared with the community.",
    });
    setNewPost("");
    setIsDialogOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2" data-testid="text-community-title">Community</h1>
            <p className="text-muted-foreground">Share tips and connect with eco-warriors</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" data-testid="button-new-post">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a Post</DialogTitle>
                <DialogDescription>
                  Share your sustainability journey with the community
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Textarea
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  rows={4}
                  data-testid="input-post-content"
                />
                <Button onClick={handleSubmitPost} className="w-full" data-testid="button-submit-post">
                  Share Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} data-testid={`card-post-${post.id}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(post.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{post.author}</CardTitle>
                    <p className="text-sm text-muted-foreground">{post.time}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.content}</p>
                <div className="flex items-center gap-6">
                  <Button variant="ghost" size="sm" className="gap-2" data-testid={`button-like-${post.id}`}>
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2" data-testid={`button-comment-${post.id}`}>
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2" data-testid={`button-share-${post.id}`}>
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
