import FloatingLeaf from '../FloatingLeaf';

export default function FloatingLeafExample() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
      <FloatingLeaf />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-foreground">Floating Leaves Animation</h2>
      </div>
    </div>
  );
}
