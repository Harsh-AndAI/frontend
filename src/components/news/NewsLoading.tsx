export const NewsLoading = () => {
  return (
    <div className="border-t border-brand-border">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="grid gap-6 border-b border-brand-border py-8 sm:grid-cols-[160px_1fr]"
        >
          <div className="h-4 w-28 animate-pulse bg-brand-border" />

          <div>
            <div className="h-6 w-3/4 animate-pulse bg-brand-border" />
            <div className="mt-4 h-4 w-full animate-pulse bg-brand-border" />
            <div className="mt-2 h-4 w-2/3 animate-pulse bg-brand-border" />
          </div>
        </div>
      ))}
    </div>
  );
};