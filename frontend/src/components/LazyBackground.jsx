function LazyBackground({ children }) {
  return (
    <div className="p-5 bg-blue-900 bg-opacity-40 text-right border border-blue-900 rounded-md space-y-3">
      {children}
    </div>
  );
}

export default LazyBackground;
