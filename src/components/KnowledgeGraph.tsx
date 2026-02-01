import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  type: "chat" | "doc" | "task" | "person";
}

interface Connection {
  from: number;
  to: number;
}

const nodes: Node[] = [
  { id: 1, x: 50, y: 40, size: 12, delay: 0, type: "chat" },
  { id: 2, x: 25, y: 55, size: 10, delay: 0.2, type: "doc" },
  { id: 3, x: 75, y: 50, size: 14, delay: 0.4, type: "task" },
  { id: 4, x: 40, y: 70, size: 8, delay: 0.6, type: "person" },
  { id: 5, x: 60, y: 25, size: 10, delay: 0.8, type: "chat" },
  { id: 6, x: 85, y: 35, size: 8, delay: 1, type: "doc" },
  { id: 7, x: 15, y: 35, size: 10, delay: 1.2, type: "task" },
  { id: 8, x: 35, y: 20, size: 8, delay: 1.4, type: "person" },
];

const connections: Connection[] = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 5 },
  { from: 2, to: 4 },
  { from: 2, to: 7 },
  { from: 3, to: 4 },
  { from: 3, to: 6 },
  { from: 5, to: 6 },
  { from: 5, to: 8 },
  { from: 7, to: 8 },
];

const getNodeColor = (type: Node["type"]) => {
  switch (type) {
    case "chat":
      return "hsl(186 100% 50%)";
    case "doc":
      return "hsl(270 60% 60%)";
    case "task":
      return "hsl(150 80% 50%)";
    case "person":
      return "hsl(45 100% 60%)";
  }
};

export const KnowledgeGraph = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(186 100% 50%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(270 60% 60%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          return (
            <motion.line
              key={`line-${i}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size / 10}
            fill={getNodeColor(node.type)}
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: node.delay,
              type: "spring",
              stiffness: 200,
            }}
          >
            <animate
              attributeName="r"
              values={`${node.size / 10};${node.size / 8};${node.size / 10}`}
              dur="4s"
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
          </motion.circle>
        ))}
      </svg>
    </div>
  );
};
