export const Card = ({ children, className = "" }) => (
  <div className={`p-4 bg-white rounded shadow ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;