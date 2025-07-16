export default function Container({ children }) {
  return (
    <div>
      <h1>Rendy Kamaluddin</h1>
      {children}
      <footer>
        <footer className="text-center text-gray-200 text-xs">
          <p>© 2023 My First React App</p>
        </footer>
      </footer>
    </div>
  );
}
