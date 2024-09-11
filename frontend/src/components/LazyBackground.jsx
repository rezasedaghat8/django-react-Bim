function LazyBackground({ children }) {
  return (
    <div className="p-5 dark:text-gray-300 text-gray-600 md:text-base text-sm dark:bg-blue-900 bg-gray-200 dark:bg-opacity-40 text-right border border-gray-400 dark:border-blue-900 rounded-md space-y-3">
      {children}
    </div>
  );
}

export default LazyBackground;
