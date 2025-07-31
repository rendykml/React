export default function Container({ children }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Aplikasi React Saya
      </h1>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
