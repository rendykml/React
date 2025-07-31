export default function Container({ children }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      {children}
    </div>
  );
}
