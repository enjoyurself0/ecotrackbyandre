import { Leaf } from "lucide-react";

export default function FloatingLeaf() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Leaf 
        className="absolute text-primary animate-float opacity-20"
        style={{
          top: "10%",
          left: "15%",
          width: "60px",
          height: "60px",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Leaf 
        className="absolute text-primary animate-float opacity-15"
        style={{
          top: "25%",
          right: "20%",
          width: "40px",
          height: "40px",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />
      <Leaf 
        className="absolute text-primary animate-float opacity-10"
        style={{
          bottom: "30%",
          left: "10%",
          width: "50px",
          height: "50px",
          animation: "float 7s ease-in-out infinite 2s",
        }}
      />
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}
